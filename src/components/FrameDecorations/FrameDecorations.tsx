import styles from './FrameDecorations.module.css';
import { FrameTheme } from '@/types';
import { DECORATION_SETS } from '@/lib/decorations';

type FrameDecorationsProps = {
  position: 'top' | 'bottom';
  theme: FrameTheme;
};

export default function FrameDecorations({ position, theme }: FrameDecorationsProps) {
  const set = DECORATION_SETS[theme.id] || DECORATION_SETS['sakura'];
  const items = position === 'top' ? set.top : set.bottom;

  return (
    <div className={styles.decorRow} data-position={position}>
      {items.map((item, i) => (
        <span
          key={i}
          className={styles.item}
          style={{ fontSize: item.size, animationDelay: `${i * 0.15}s` }}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
}
