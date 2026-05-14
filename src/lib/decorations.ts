type DecoItem = {
  emoji: string;
  size: string;
};

type DecoSet = {
  top: DecoItem[];
  bottom: DecoItem[];
};

type DecoMap = Record<string, DecoSet>;

export const DECORATION_SETS: DecoMap = {
  sakura: {
    top: [
      { emoji: '🌸', size: '1.4rem' },
      { emoji: '💖', size: '1rem' },
      { emoji: '⭐', size: '1.1rem' },
      { emoji: '🌸', size: '1.2rem' },
      { emoji: '✨', size: '1.3rem' },
      { emoji: '💗', size: '1rem' },
      { emoji: '🌸', size: '1.4rem' },
    ],
    bottom: [
      { emoji: '💕', size: '1rem' },
      { emoji: '🌟', size: '1.2rem' },
      { emoji: '🎀', size: '1.3rem' },
      { emoji: '💖', size: '1rem' },
      { emoji: '🌟', size: '1.1rem' },
      { emoji: '🌸', size: '1.2rem' },
      { emoji: '💝', size: '1rem' },
    ],
  },
  lavender: {
    top: [
      { emoji: '💜', size: '1.2rem' },
      { emoji: '✨', size: '1.3rem' },
      { emoji: '🫐', size: '1rem' },
      { emoji: '⭐', size: '1.4rem' },
      { emoji: '💜', size: '1.1rem' },
      { emoji: '🌙', size: '1.2rem' },
      { emoji: '✨', size: '1rem' },
    ],
    bottom: [
      { emoji: '🔮', size: '1.2rem' },
      { emoji: '💫', size: '1.3rem' },
      { emoji: '💜', size: '1rem' },
      { emoji: '✨', size: '1.4rem' },
      { emoji: '🌟', size: '1.1rem' },
      { emoji: '🫐', size: '1rem' },
      { emoji: '💜', size: '1.2rem' },
    ],
  },
  mint: {
    top: [
      { emoji: '🍃', size: '1.2rem' },
      { emoji: '💚', size: '1rem' },
      { emoji: '⭐', size: '1.3rem' },
      { emoji: '🌿', size: '1.4rem' },
      { emoji: '✨', size: '1.1rem' },
      { emoji: '🍀', size: '1.2rem' },
      { emoji: '💚', size: '1rem' },
    ],
    bottom: [
      { emoji: '🌿', size: '1rem' },
      { emoji: '💫', size: '1.2rem' },
      { emoji: '🍃', size: '1.3rem' },
      { emoji: '⭐', size: '1.1rem' },
      { emoji: '🌱', size: '1.4rem' },
      { emoji: '💚', size: '1rem' },
      { emoji: '✨', size: '1.2rem' },
    ],
  },
  sky: {
    top: [
      { emoji: '☁️', size: '1.3rem' },
      { emoji: '💙', size: '1rem' },
      { emoji: '⭐', size: '1.2rem' },
      { emoji: '🦋', size: '1.4rem' },
      { emoji: '💫', size: '1.1rem' },
      { emoji: '☁️', size: '1.2rem' },
      { emoji: '💙', size: '1rem' },
    ],
    bottom: [
      { emoji: '🌊', size: '1.1rem' },
      { emoji: '💙', size: '1.2rem' },
      { emoji: '✨', size: '1.3rem' },
      { emoji: '🦋', size: '1rem' },
      { emoji: '⭐', size: '1.4rem' },
      { emoji: '☁️', size: '1.1rem' },
      { emoji: '💙', size: '1rem' },
    ],
  },
  peach: {
    top: [
      { emoji: '🍑', size: '1.2rem' },
      { emoji: '🧡', size: '1rem' },
      { emoji: '⭐', size: '1.3rem' },
      { emoji: '🌼', size: '1.4rem' },
      { emoji: '✨', size: '1.1rem' },
      { emoji: '🍊', size: '1rem' },
      { emoji: '🧡', size: '1.2rem' },
    ],
    bottom: [
      { emoji: '🌸', size: '1rem' },
      { emoji: '💫', size: '1.2rem' },
      { emoji: '🍑', size: '1.3rem' },
      { emoji: '⭐', size: '1.1rem' },
      { emoji: '🌼', size: '1.4rem' },
      { emoji: '🧡', size: '1rem' },
      { emoji: '✨', size: '1.2rem' },
    ],
  },
  rainbow: {
    top: [
      { emoji: '🌈', size: '1.4rem' },
      { emoji: '💖', size: '1rem' },
      { emoji: '⭐', size: '1.2rem' },
      { emoji: '🦄', size: '1.3rem' },
      { emoji: '✨', size: '1.1rem' },
      { emoji: '🌈', size: '1.2rem' },
      { emoji: '💫', size: '1rem' },
    ],
    bottom: [
      { emoji: '🎉', size: '1.1rem' },
      { emoji: '💖', size: '1.2rem' },
      { emoji: '🦄', size: '1.3rem' },
      { emoji: '🌈', size: '1rem' },
      { emoji: '✨', size: '1.4rem' },
      { emoji: '💫', size: '1.1rem' },
      { emoji: '🎀', size: '1rem' },
    ],
  },
};
