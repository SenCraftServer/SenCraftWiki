import React from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.6" fill="currentColor" stroke="none" />
      <path fill="none" d="M12 2.4v1.6M12 20v1.6M2.4 12H4M20 12h1.6M5.3 5.3l1.1 1.1M17.6 17.6l1.1 1.1M5.3 18.7l1.1-1.1M17.6 6.4l1.1-1.1" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 14.6A8.9 8.9 0 1 1 9.4 3.5a7.2 7.2 0 0 0 11.1 11.1Z" />
    </svg>
  );
}

/**
 * 主题切换：滑块开关。
 *
 * 与官方按钮的区别：滑块位置本身表达开关状态（左侧=浅色，右侧=深色），
 * 滑块内的图标再复述一次当前模式，避免只靠颜色区分。
 * 外层仍沿用 navbar 传入的 className，移动端抽屉里的同一组件无需额外适配。
 */
function ColorModeToggle({className, buttonClassName, value, onChange}) {
  const isBrowser = useIsBrowser();
  const isDark = value === 'dark';

  const label = translate(
    {
      message: '切换深浅色模式（当前：{mode}）',
      id: 'theme.colorToggle.ariaLabel',
      description: 'The ARIA label for the navbar color mode toggle',
    },
    {
      mode: isDark
        ? translate({
            message: '深色',
            id: 'theme.colorToggle.ariaLabel.mode.dark',
            description: 'The name for the dark color mode',
          })
        : translate({
            message: '浅色',
            id: 'theme.colorToggle.ariaLabel.mode.light',
            description: 'The name for the light color mode',
          }),
    },
  );

  return (
    <div className={clsx(styles.root, className)}>
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label={label}
        title={label}
        disabled={!isBrowser}
        onClick={() => onChange(isDark ? 'light' : 'dark')}
        className={clsx(styles.toggle, buttonClassName)}>
        <span className={styles.track} aria-hidden="true">
          <span className={styles.thumb}>{isDark ? <MoonIcon /> : <SunIcon />}</span>
        </span>
      </button>
    </div>
  );
}

export default React.memo(ColorModeToggle);
