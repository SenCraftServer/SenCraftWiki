import React, {useEffect, useId, useMemo, useState} from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import styles from './styles.module.css';

function ListIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M4 6h16M4 12h10M4 18h13" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/** 按层级过滤出要展示的标题 */
function useFilteredToc(toc, minHeadingLevelOption, maxHeadingLevelOption) {
  const themeConfig = useThemeConfig();
  const minLevel = minHeadingLevelOption ?? themeConfig.tableOfContents.minHeadingLevel;
  const maxLevel = maxHeadingLevelOption ?? themeConfig.tableOfContents.maxHeadingLevel;

  return useMemo(
    () => toc.filter((item) => item.level >= minLevel && item.level <= maxLevel),
    [toc, minLevel, maxLevel],
  );
}

/**
 * 阅读位置探测：取视口上沿附近最后一个越过的标题。
 * 只读 scroll + rAF 节流，比 IntersectionObserver 更容易表达“当前章节”。
 */
function useActiveHeadingId(items) {
  const ids = useMemo(() => items.map((item) => item.id), [items]);
  const [activeId, setActiveId] = useState(ids[0] ?? null);

  useEffect(() => {
    if (!ids.length) {
      return undefined;
    }
    let frame = 0;

    const compute = () => {
      frame = 0;
      const threshold = 140; // 导航栏高度 + 一点余量
      let current = ids[0];
      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) {
          continue;
        }
        if (element.getBoundingClientRect().top <= threshold) {
          current = id;
        } else {
          break;
        }
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(compute);
      }
    };

    compute();
    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [ids]);

  return activeId;
}

/**
 * 移动端页内目录（折叠条）
 *
 * 折叠状态下直接显示当前章节，用户不必展开就能确认阅读位置；
 * 展开后为紧凑列表，当前项带左侧指示条，点击后自动收起避免遮挡正文。
 */
export default function TOCCollapsible({toc, className, minHeadingLevel, maxHeadingLevel}) {
  const items = useFilteredToc(toc, minHeadingLevel, maxHeadingLevel);
  const activeId = useActiveHeadingId(items);
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const baseLevel = items.length ? Math.min(...items.map((item) => item.level)) : 2;
  const activeItem = items.find((item) => item.id === activeId);

  if (!items.length) {
    return null;
  }

  return (
    <div className={clsx('theme-doc-toc-mobile', styles.root, className)}>
      <button
        type="button"
        className={styles.bar}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}>
        <span className={styles.barLabel}>
          <ListIcon />
          本页目录
        </span>
        <span className={styles.current}>{activeItem ? activeItem.value : '开始阅读'}</span>
        <span className={styles.count}>{items.length}</span>
        <span className={clsx(styles.chevron, open && styles.chevronOpen)}>
          <ChevronIcon />
        </span>
      </button>

      <div id={panelId} className={clsx(styles.panel, open && styles.panelOpen)}>
        <div className={styles.panelInner}>
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.id} style={{paddingLeft: (item.level - baseLevel) * 12}}>
                <a
                  href={`#${item.id}`}
                  className={clsx(styles.link, item.id === activeId && styles.linkActive)}
                  onClick={() => setOpen(false)}>
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
