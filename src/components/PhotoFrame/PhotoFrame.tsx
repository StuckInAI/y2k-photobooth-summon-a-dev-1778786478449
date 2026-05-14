import styles from './PhotoFrame.module.css';
import PhotoSlotCell from '@/components/PhotoSlotCell/PhotoSlotCell';
import FrameDecorations from '@/components/FrameDecorations/FrameDecorations';
import { FrameTheme, PhotoSlot } from '@/types';

type PhotoFrameProps = {
  slots: PhotoSlot[];
  theme: FrameTheme;
  onImageUpload: (slotId: number, imageData: string) => void;
  onClearSlot: (slotId: number) => void;
};

export default function PhotoFrame({ slots, theme, onImageUpload, onClearSlot }: PhotoFrameProps) {
  return (
    <div
      id="photo-booth-frame"
      className={styles.frame}
      style={{
        background: theme.bgColor,
        borderColor: theme.borderColor,
      }}
    >
      {/* Top decoration */}
      <div className={styles.topDecor}>
        <FrameDecorations position="top" theme={theme} />
      </div>

      {/* Photo slots */}
      <div className={styles.slots}>
        {slots.map((slot, index) => (
          <PhotoSlotCell
            key={slot.id}
            slot={slot}
            index={index}
            theme={theme}
            onImageUpload={onImageUpload}
            onClearSlot={onClearSlot}
          />
        ))}
      </div>

      {/* Bottom decoration */}
      <div className={styles.bottomDecor}>
        <FrameDecorations position="bottom" theme={theme} />
      </div>

      {/* Label */}
      <div className={styles.label} style={{ color: theme.labelColor }}>
        <span className={styles.labelText}>✿ {theme.name} ✿</span>
        <span className={styles.labelSub}>photo booth · {new Date().getFullYear()}</span>
      </div>
    </div>
  );
}
