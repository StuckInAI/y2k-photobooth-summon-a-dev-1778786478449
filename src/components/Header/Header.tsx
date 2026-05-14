import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.sparkleLeft}>
          <span>✨</span><span>💫</span><span>⭐</span>
        </div>
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>✿ Photo Booth ✿</h1>
          <p className={styles.subtitle}>Y2K Aesthetic · 4-Cut Frame · Dreamy Pastel</p>
        </div>
        <div className={styles.sparkleRight}>
          <span>⭐</span><span>💫</span><span>✨</span>
        </div>
      </div>
    </header>
  );
}
