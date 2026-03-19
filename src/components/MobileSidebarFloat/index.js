import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
      <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
    </svg>
  );
}

function MenuItem({ item, depth = 0 }) {
  const [isOpen, setIsOpen] = useState(false);

  if (item.type === 'category') {
    const hasChildren = item.items && item.items.length > 0;

    return (
      <li className="menu__list-item">
        <Link
          className={clsx('menu__link', 'menu__link--sublist', !hasChildren && 'menu__link--empty')}
          onClick={hasChildren ? () => setIsOpen(!isOpen) : undefined}
        >
          {item.label}
        </Link>
        {hasChildren && (
          <ul className={clsx('menu__list', isOpen && 'menu__list--open')} style={{ paddingLeft: depth > 0 ? 12 : 0 }}>
            {item.items.map((child, index) => (
              <MenuItem key={index} item={child} depth={depth + 1} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  if (item.type === 'link') {
    return (
      <li className="menu__list-item">
        <Link
          className="menu__link"
          to={item.href}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  if (item.type === 'html') {
    return (
      <li
        className="menu__list-item"
        dangerouslySetInnerHTML={{ __html: item.value }}
      />
    );
  }

  return null;
}

export default function MobileSidebarFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebar, setSidebar] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const loadSidebar = async () => {
      if (window.__docusaurus) {
        const docsSidebar = document.querySelector('.theme-doc-sidebar-menu');
        if (docsSidebar) {
          const clonedSidebar = docsSidebar.cloneNode(true);
          setSidebar(clonedSidebar);
        }
      }
    };

    if (isOpen && !sidebar) {
      loadSidebar();
    }
  }, [isOpen, sidebar]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="mobile-sidebar-float" aria-label="文档侧边栏">
      <button
        className="mobile-sidebar-float__button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-label={isOpen ? '关闭文档侧边栏' : '打开文档侧边栏'}
      >
        {isOpen ? <CloseIcon /> : <ListIcon />}
      </button>

      <div
        className={clsx('mobile-sidebar-float__panel', isOpen && 'mobile-sidebar-float__panel--open')}
        role="navigation"
        aria-label="文档侧边栏"
      >
        <div className="mobile-sidebar-float__header">
          <h3 className="mobile-sidebar-float__title">文档目录</h3>
          <button
            className="mobile-sidebar-float__close"
            onClick={handleClose}
            aria-label="关闭"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="mobile-sidebar-float__content">
          {sidebar ? (
            <div dangerouslySetInnerHTML={{ __html: sidebar.innerHTML }} />
          ) : (
            <div style={{ padding: '16px', textAlign: 'center', color: 'var(--ifm-color-emphasis-600)' }}>
              正在加载目录...
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="mobile-sidebar-float__backdrop"
          onClick={handleClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        />
      )}
    </div>
  );
}
