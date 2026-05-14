import styles from './ThemePicker.module.css';
import { FrameTheme } from '@/types';
import clsx from 'clsx';

type ThemePickerProps = {
  themes: FrameTheme[];
  selectedTheme: FrameTheme;
  onSelect: (theme: FrameTheme) => void;
};

export default function ThemePicker({ themes, selectedTheme, onSelect }: ThemePickerProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>🎀 Themes</h2>
      <div className={styles.grid}>
        {themes.map(theme => (
          <button
            key={theme.id}
            className={clsx(styles.themeBtn, selectedTheme.id === theme.id && styles.selected)}
            onClick={() => onSelect(theme)}
            style={{
              borderColor: selectedTheme.id === theme.id ? theme.borderColor : 'transparent',
              background: theme.bgColor,
            }}
            title={theme.name}
          >
            <span className={styles.swatch} style={{ background: theme.borderColor }} />
            <span className={styles.themeName}>{theme.name}</span>
            {selectedTheme.id === theme.id && (
              <span className={styles.checkmark}>✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
