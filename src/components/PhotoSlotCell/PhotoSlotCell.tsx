import { useRef, useCallback } from 'react';
import styles from './PhotoSlotCell.module.css';
import { FrameTheme, PhotoSlot } from '@/types';

type PhotoSlotCellProps = {
  slot: PhotoSlot;
  index: number;
  theme: FrameTheme;
  onImageUpload: (slotId: number, imageData: string) => void;
  onClearSlot: (slotId: number) => void;
};

export default function PhotoSlotCell({ slot, index, theme, onImageUpload, onClearSlot }: PhotoSlotCellProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      if (evt.target && typeof evt.target.result === 'string') {
        onImageUpload(slot.id, evt.target.result);
      }
    };
    reader.readAsDataURL(file);
    // reset input
    if (inputRef.current) inputRef.current.value = '';
  }, [slot.id, onImageUpload]);

  const handleClick = useCallback(() => {
    if (inputRef.current) inputRef.current.click();
  }, []);

  const handleClear = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClearSlot(slot.id);
  }, [slot.id, onClearSlot]);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      if (evt.target && typeof evt.target.result === 'string') {
        onImageUpload(slot.id, evt.target.result);
      }
    };
    reader.readAsDataURL(file);
  }, [slot.id, onImageUpload]);

  const slotNumber = index + 1;

  return (
    <div
      className={styles.cell}
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{ borderColor: theme.borderColor }}
      title={slot.imageData ? 'Click to change photo' : 'Click or drag to add photo'}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className={styles.hiddenInput}
        onChange={handleFileChange}
      />

      {slot.imageData ? (
        <div className={styles.imageWrapper}>
          <img src={slot.imageData} alt={`Photo ${slotNumber}`} className={styles.photo} />
          <button
            className={styles.clearBtn}
            onClick={handleClear}
            title="Remove photo"
          >
            ✕
          </button>
        </div>
      ) : (
        <div className={styles.placeholder} style={{ background: theme.accentColor }}>
          <span className={styles.placeholderIcon}>📷</span>
          <span className={styles.placeholderText}>Photo {slotNumber}</span>
          <span className={styles.placeholderHint}>click or drag</span>
        </div>
      )}
    </div>
  );
}
