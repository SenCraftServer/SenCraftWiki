import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function TerminalWindow() {
  return (
    <div className={styles.terminalWindow}>
      <div className={styles.terminalHeader}>
        <div className={styles.terminalButtons}>
          <span className={styles.terminalButtonRed}></span>
          <span className={styles.terminalButtonYellow}></span>
          <span className={styles.terminalButtonGreen}></span>
        </div>
        <div className={styles.terminalTitle}>SenCraft Terminal</div>
        <div className={styles.terminalButtonsPlaceholder}></div>
      </div>
      <div className={styles.terminalBody}>
        <div className={styles.terminalLine}>
          <span className={styles.terminalPrompt}>$</span>
          <span className={styles.terminalCommand}> java -jar Maackia-1.21.11.jar</span>
        </div>
        <div className={styles.terminalOutput}>
          <span className={styles.terminalTime}>[12:34:56]</span>
          <span className={styles.terminalInfo}> [INFO]</span>
          <span className={styles.terminalText}> Loading properties</span>
        </div>
        <div className={styles.terminalOutput}>
          <span className={styles.terminalTime}>[12:34:56]</span>
          <span className={styles.terminalInfo}> [INFO]</span>
          <span className={styles.terminalText}> Starting Minecraft Server version 1.21.11</span>
        </div>
        <div className={styles.terminalOutput}>
          <span className={styles.terminalTime}>[12:34:57]</span>
          <span className={styles.terminalInfo}> [INFO]</span>
          <span className={styles.terminalText}> Loading world "plot"...</span>
        </div>
        <div className={styles.terminalOutput}>
          <span className={styles.terminalTime}>[12:34:57]</span>
          <span className={styles.terminalInfo}> [INFO]</span>
          <span className={styles.terminalText}> Preparing spawn area: 100%</span>
        </div>
        <div className={styles.terminalOutput}>
          <span className={styles.terminalTime}>[12:34:58]</span>
          <span className={styles.terminalSuccess}> [INFO]</span>
          <span className={styles.terminalText}> Done (114.514s)! For help, type "help"</span>
        </div>
        <div className={styles.terminalLine}>
          <span className={styles.terminalPrompt}>$</span>
          <span className={styles.terminalCursor}> _</span>
        </div>
      </div>
    </div>
  );
}

function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleBlack}>在这里，</span>
            <br />
            <span className={styles.heroTitleGreen}>遇见属于你的净土。</span>
          </h1>
          <p className={styles.heroDescription}>
            SenCraft森世界<br />
            SenCraft 致力于为玩家提供体验与性能兼备的游戏服务器。<br />
            我们专注于优化每一个细节，让你的游戏体验更加流畅。
          </p>
          <div className={styles.heroButtons}>
            <Link
              className={clsx('button', styles.buttonPrimary)}
              to="/docs/wiki">
              进入Wiki
            </Link>
            <Link
              className={clsx('button', styles.buttonSecondary)}
              to="/docs/join/getting-started">
              开始游戏
            </Link>
          </div>
        </div>
        <div className={styles.heroRight}>
          <TerminalWindow />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="首页"
      description="SenCraft - 体验与性能兼备的 Minecraft 服务器">
      <HomepageHero />
    </Layout>
  );
}
