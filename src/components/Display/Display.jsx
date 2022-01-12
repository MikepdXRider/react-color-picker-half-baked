import styles from './Display.css';

export default function Display({ content, fgColor, bgColor }) {
  return (
    <main
      style={{
        color: fgColor,
        background: bgColor,
      }}
      className={styles.display}
    >
      {content}
    </main>
  );
}
