import styles from './ActionBar.module.css';

type ActionBarProps = {
  onClearAll: () => void;
  onExport: () => void;
  isExporting: boolean;
};

export default function ActionBar({ onClearAll, onExport, isExporting }: ActionBarProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>⚡ Actions</h2>
      <button
        className={styles.exportBtn}
        onClick={onExport}
        disabled={isExporting}
      >
        {isExporting ? '✨ Saving...' : '💾 Download Frame'}
      </button>
      <button
        className={styles.clearBtn}
        onClick={onClearAll}
      >
        🗑️ Clear All Photos
      </button>
      <p className={styles.hint}>Upload photos by clicking each slot or dragging images onto them.</p>
    </div>
  );
}
