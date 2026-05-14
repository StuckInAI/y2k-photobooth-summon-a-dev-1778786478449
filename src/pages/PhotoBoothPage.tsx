import { useState, useCallback } from 'react';
import styles from './PhotoBoothPage.module.css';
import PhotoFrame from '@/components/PhotoFrame/PhotoFrame';
import ThemePicker from '@/components/ThemePicker/ThemePicker';
import ActionBar from '@/components/ActionBar/ActionBar';
import Header from '@/components/Header/Header';
import { FrameTheme, PhotoSlot } from '@/types';
import { THEMES } from '@/lib/themes';

const initialSlots: PhotoSlot[] = [
  { id: 1, imageData: null },
  { id: 2, imageData: null },
  { id: 3, imageData: null },
  { id: 4, imageData: null },
];

export default function PhotoBoothPage() {
  const [slots, setSlots] = useState<PhotoSlot[]>(initialSlots);
  const [selectedTheme, setSelectedTheme] = useState<FrameTheme>(THEMES[0]);
  const [isExporting, setIsExporting] = useState(false);

  const handleImageUpload = useCallback((slotId: number, imageData: string) => {
    setSlots(prev =>
      prev.map(slot => slot.id === slotId ? { ...slot, imageData } : slot)
    );
  }, []);

  const handleClearSlot = useCallback((slotId: number) => {
    setSlots(prev =>
      prev.map(slot => slot.id === slotId ? { ...slot, imageData: null } : slot)
    );
  }, []);

  const handleClearAll = useCallback(() => {
    setSlots(initialSlots.map(s => ({ ...s, imageData: null })));
  }, []);

  const handleExport = useCallback(async () => {
    setIsExporting(true);
    try {
      const frameEl = document.getElementById('photo-booth-frame');
      if (!frameEl) return;

      const { default: html2canvas } = await import('html2canvas');
      const canvas = await html2canvas(frameEl, {
        scale: 3,
        useCORS: true,
        backgroundColor: '#FFFFFF',
      });

      const link = document.createElement('a');
      link.download = 'y2k-photo-booth.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('Export failed', err);
    } finally {
      setIsExporting(false);
    }
  }, []);

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.sidebar}>
          <ThemePicker
            themes={THEMES}
            selectedTheme={selectedTheme}
            onSelect={setSelectedTheme}
          />
          <ActionBar
            onClearAll={handleClearAll}
            onExport={handleExport}
            isExporting={isExporting}
          />
        </div>
        <div className={styles.frameWrapper}>
          <PhotoFrame
            slots={slots}
            theme={selectedTheme}
            onImageUpload={handleImageUpload}
            onClearSlot={handleClearSlot}
          />
        </div>
      </main>
    </div>
  );
}
