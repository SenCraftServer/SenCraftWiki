import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const COMMAND = 'java -jar Maackia-1.21.11.jar';

const OUTPUT = [
  {time: '[12:34:56]', tag: 'info', text: 'Loading properties'},
  {time: '[12:34:56]', tag: 'info', text: 'Starting Minecraft Server version 1.21.11'},
  {time: '[12:34:57]', tag: 'info', text: 'Loading world "plot"...'},
  {time: '[12:34:57]', tag: 'info', text: 'Preparing spawn area: 100%'},
  {time: '[12:34:58]', tag: 'success', text: 'Done (114.514s)! For help, type "help"'},
];

/** 首页右上角的服务器启动模拟终端。 */
export default function TerminalWindow() {
  return (
    <div className={styles.window}>
      <div className={styles.header}>
        <div className={styles.lights}>
          <span className={styles.lightRed} />
          <span className={styles.lightYellow} />
          <span className={styles.lightGreen} />
        </div>
        <span className={styles.title}>SenCraft Terminal</span>
        <span className={styles.placeholder} />
      </div>

      <div className={styles.body}>
        <div className={styles.line}>
          <span className={styles.prompt}>$</span>
          <span className={styles.command}>{COMMAND}</span>
        </div>

        {OUTPUT.map((entry, index) => (
          <div
            key={`${entry.time}-${index}`}
            className={styles.output}
            style={{animationDelay: `${3 + index * 0.5}s`}}>
            <span className={styles.time}>{entry.time}</span>
            <span className={entry.tag === 'success' ? styles.success : styles.info}>
              {' '}
              [INFO]
            </span>
            <span className={styles.text}> {entry.text}</span>
          </div>
        ))}

        <div className={styles.line}>
          <span className={styles.prompt}>$</span>
          <span className={styles.cursor}>_</span>
        </div>
      </div>
    </div>
  );
}
