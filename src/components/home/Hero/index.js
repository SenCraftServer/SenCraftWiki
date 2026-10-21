import React from 'react';
import Link from '@docusaurus/Link';
import TerminalWindow from '../TerminalWindow';
import styles from './styles.module.css';

const TITLE = '遇见属于你的净土。';

/** 首页首屏：品牌标题、导语、行动按钮与终端演示。 */
export default function HomeHero() {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.titleDark}>在这里，</span>
            <br />
            <span className={styles.titleBrand}>{TITLE}</span>
          </h1>

          <p className={styles.description}>
            <span className={styles.descLine}>SenCraft森世界</span>
            <span className={styles.descLine}>SenCraft 致力于为玩家提供体验与性能兼备的游戏服务器。</span>
            <span className={styles.descLine}>我们专注于优化每一个细节，让你的游戏体验更加流畅。</span>
          </p>

          <div className={styles.actions}>
            <Link className="button button--primary button--lg" to="/docs/wiki">
              进入Wiki
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/join/getting-started">
              开始游戏
            </Link>
          </div>
        </div>

        <div className={styles.visual}>
          <TerminalWindow />
        </div>
      </div>
    </header>
  );
}
