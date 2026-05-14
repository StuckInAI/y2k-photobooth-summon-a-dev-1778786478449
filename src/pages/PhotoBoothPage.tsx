import { useState, useCallback } from 'react';
import styles from './PhotoBoothPage.module.css';
import Header from '@/components/Header/Header';
import PhotoFrame from '@/components/PhotoFrame/PhotoFrame';
import ThemePicker from '@/components/ThemePicker/ThemePicker';
import ActionBar from '@/components/ActionBar/ActionBar';
import { THEMES } from '@/lib/themes';
import { PhotoSlot } from '@/types';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const INITIAL_SLOTS: PhotoSlot[] = [
  { id: 1, imageData: null },
  { id: 2, imageData: null },
  { id: 3, imageData: null },
  { id: 4, imageData: null },
];

export default function PhotoBoothPage() {
  const [slots, setSlots] = useLocalStorage<PhotoSlot[]>('photobooth-slots', INITIAL_SLOTS);
  const [selectedThemeId, setSelectedThemeId] = useLocalStorage<string>('photobooth-theme', THEMES[0].id);
  const [isExporting, setIsExporting] = useState(false);

  const selectedTheme = THEMES.find(t => t.id === selectedThemeId) || THEMES[0];

  const handleImageUpload = useCallback((slotId: number, imageData: string) => {
    setSlots(slots.map(s => s.id === slotId ? { ...s, imageData } : s));
  }, [slots, setSlots]);

  const handleClearSlot = useCallback((slotId: number) => {
    setSlots(slots.map(s => s.id === slotId ? { ...s, imageData: null } : s));
  }, [slots, setSlots]);

  const handleClearAll = useCallback(() => {
    setSlots(INITIAL_SLOTS);
  }, [setSlots]);

  const handleExport = useCallback(async () => {
    setIsExporting(true);
    try {
      const { default: html2canvas } = await import('html2canvas');
      const frameEl = document.getElementById('photo-booth-frame');
      if (!frameEl) return;
      const canvas = await html2canvas(frameEl, {
        useCORS: true,
        backgroundColor: null,
        scale: 2,
      });
      const link = document.createElement('a');
      link.download = `photobooth-${selectedTheme.id}-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('Export failed:', err);
    } finally {
      setIsExporting(false);
    }
  }, [selectedTheme.id]);

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.main}>
        <aside className={styles.sidebar}>
          <ThemePicker
            themes={THEMES}
            selectedTheme={selectedTheme}
            onSelect={(theme) => setSelectedThemeId(theme.id)}
          />
          <ActionBar
            onClearAll={handleClearAll}
            onExport={handleExport}
            isExporting={isExporting}
          />
        </aside>
        <div className={styles.frameArea}>
          <PhotoFrame
            slots={slots}
            theme={selectedTheme}
            onImageUpload={handleImageUpload}
            onClearSlot={handleClearSlot}
          />
        </div>
      </div>
    </div>
  );
}
