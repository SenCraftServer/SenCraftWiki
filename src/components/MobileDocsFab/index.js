import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import {useLocation} from '@docusaurus/router';
import {
  DocSidebarItemsExpandedStateProvider,
  useDocsSidebar,
} from '@docusaurus/plugin-content-docs/client';
import DocSidebarItems from '@theme/DocSidebarItems';
import styles from './styles.module.css';

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M4 6h16M4 12h10M4 18h13" />
    </svg>
  );
}

function CloseIcon({size = 20}) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

/** 归一化路径，忽略末尾斜杠与查询串 */
function normalizePath(value) {
  if (!value) {
    return '';
  }
  return value.split('#')[0].split('?')[0].replace(/\/+$/, '');
}

/** 找到当前文档在侧边栏中的祖先分类链，用于顶部路径提示 */
function findTrail(items, pathname, trail = []) {
  for (const item of items) {
    if (item.type === 'link') {
      if (normalizePath(item.href) === pathname) {
        return trail;
      }
      continue;
    }
    if (item.type === 'category') {
      const next = [...trail, item.label];
      if (item.href && normalizePath(item.href) === pathname) {
        return trail;
      }
      const found = findTrail(item.items ?? [], pathname, next);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

/** 按关键词过滤侧边栏树；命中子项时保留并展开其父分类 */
function filterSidebar(items, keyword) {
  const query = keyword.trim().toLowerCase();
  if (!query) {
    return items;
  }

  return items.reduce((acc, item) => {
    if (item.type === 'link') {
      if (item.label.toLowerCase().includes(query)) {
        acc.push(item);
      }
      return acc;
    }

    if (item.type === 'category') {
      const selfMatch = item.label.toLowerCase().includes(query);
      const children = filterSidebar(item.items ?? [], keyword);
      if (selfMatch || children.length) {
        acc.push({...item, items: selfMatch ? item.items : children, collapsed: false});
      }
    }

    return acc;
  }, []);
}

/** 统计过滤后可见的链接数，用于空态判断 */
function countLinks(items) {
  return items.reduce((total, item) => {
    if (item.type === 'link') {
      return total + 1;
    }
    if (item.type === 'category') {
      return total + countLinks(item.items ?? []);
    }
    return total;
  }, 0);
}

/**
 * 移动端文档目录抽屉。
 *
 * 由 DocRoot/Layout 的包装组件渲染，处在 DocsSidebarProvider 内部，
 * 直接读取真实侧边栏数据并复用官方 DocSidebarItems 渲染。
 *
 * 可用性要点：
 * - 顶部显示当前文档所属分类，打开后知道“我在哪”
 * - 支持关键词过滤，长目录不必逐级翻找
 * - 打开时把当前项滚到视野中部
 * - 焦点在抽屉内循环，Esc / 遮罩 / 点击链接都会关闭
 */
export default function MobileDocsFab() {
  const sidebar = useDocsSidebar();
  const {pathname} = useLocation();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const panelRef = useRef(null);
  const contentRef = useRef(null);
  const closeRef = useRef(null);
  const fabRef = useRef(null);
  const hasOpened = useRef(false);

  const currentPath = normalizePath(pathname);

  const trail = useMemo(
    () => (sidebar?.items ? findTrail(sidebar.items, currentPath) : null),
    [sidebar, currentPath],
  );

  const filteredItems = useMemo(
    () => (sidebar?.items ? filterSidebar(sidebar.items, query) : []),
    [sidebar, query],
  );

  const visibleLinks = useMemo(() => countLinks(filteredItems), [filteredItems]);

  const close = useCallback(() => setOpen(false), []);

  // 路由变化后自动收起并清空搜索
  useEffect(() => {
    setOpen(false);
    setQuery('');
  }, [pathname]);

  // 打开时锁定滚动，支持 Esc 关闭与焦点循环
  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) {
        return;
      }
      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) {
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  // 打开后：聚焦关闭按钮，并把当前项滚到视野中部
  useEffect(() => {
    if (open) {
      hasOpened.current = true;
      const timer = window.setTimeout(() => {
        closeRef.current?.focus();
        const content = contentRef.current;
        if (!content) {
          return;
        }
        const active = content.querySelector('[class*="menu__link--active"]');
        if (!active) {
          return;
        }
        const contentRect = content.getBoundingClientRect();
        const activeRect = active.getBoundingClientRect();
        content.scrollTop +=
          activeRect.top - contentRect.top - content.clientHeight / 2 + activeRect.height / 2;
      }, 80);
      return () => window.clearTimeout(timer);
    }
    if (hasOpened.current) {
      fabRef.current?.focus();
    }
    return undefined;
  }, [open]);

  if (!sidebar?.items?.length) {
    return null;
  }

  const isSearching = query.trim().length > 0;

  return (
    <div className={clsx('mobile-docs-fab', styles.root)}>
      <button
        ref={fabRef}
        type="button"
        className={styles.fab}
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? '关闭文档目录' : '打开文档目录'}
        aria-expanded={open}
        aria-controls="mobile-docs-panel">
        {open ? <CloseIcon size={18} /> : <MenuIcon />}
        <span className={styles.fabText}>{open ? '收起' : '目录'}</span>
      </button>

      <div
        className={clsx(styles.backdrop, open && styles.backdropVisible)}
        onClick={close}
        aria-hidden="true"
      />

      <aside
        id="mobile-docs-panel"
        ref={panelRef}
        className={clsx(styles.panel, open && styles.panelOpen)}
        role="dialog"
        aria-modal="true"
        aria-label="文档目录">
        <header className={styles.header}>
          <div className={styles.headText}>
            <span className={styles.eyebrow}>文档目录</span>
            <span className={styles.trail} title={trail?.join(' / ') || 'SenCraft 官方 Wiki'}>
              {trail?.length ? trail.join(' / ') : 'SenCraft 官方 Wiki'}
            </span>
          </div>
          <button ref={closeRef} type="button" className={styles.close} onClick={close} aria-label="关闭文档目录">
            <CloseIcon />
          </button>
        </header>

        <div className={styles.search}>
          <span className={styles.searchIcon}>
            <SearchIcon />
          </span>
          <input
            type="search"
            className={styles.searchInput}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索目录"
            aria-label="搜索文档目录"
            autoComplete="off"
            enterKeyHint="search"
          />
          {isSearching && (
            <button type="button" className={styles.clear} onClick={() => setQuery('')} aria-label="清空搜索">
              <CloseIcon size={14} />
            </button>
          )}
        </div>

        <div className={styles.content} ref={contentRef}>
          {visibleLinks > 0 ? (
            <DocSidebarItemsExpandedStateProvider>
              <ul className={clsx('menu__list', styles.list)}>
                <DocSidebarItems
                  items={filteredItems}
                  activePath={pathname}
                  level={1}
                  onItemClick={(item) => {
                    if (item.type === 'link' || (item.type === 'category' && item.href)) {
                      close();
                    }
                  }}
                />
              </ul>
            </DocSidebarItemsExpandedStateProvider>
          ) : (
            <div className={styles.empty}>
              <p className={styles.emptyTitle}>没有匹配的目录项</p>
              <button type="button" className={styles.emptyAction} onClick={() => setQuery('')}>
                清空关键词
              </button>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
