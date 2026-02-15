import { Platform } from 'react-native';

export const Colors = {
  light: {
    bg: '#F5F5F5',
    card: '#FFFFFF',
    card2: '#DCDCDC',
    text: '#020202',
    textMuted: '#3F3F3F',
    textOnColor: '#FFFFFF',
    primary: '#3C65B9',
    primaryFg: '#FFFFFF',
    secondary: '#A192DA',
    secondaryFg: '#000000',
    accent: '#00A3E3',
    accentFg: '#000000',
    border: '#CCCCCC',
    ring: '#527DD3',
    good: '#009F89',
    goodFg: '#FFFFFF',
    warn: '#EC9340',
    warnFg: '#030303',
    bad: '#B85EB6',
    badFg: '#FFFFFF',
  },
  dark: {
    bg: '#020202',
    card: '#121212',
    card2: '#0B0B0B',
    text: '#E4E4E4',
    textMuted: '#8F8F8F',
    textOnColor: '#000000',
    primary: '#5D84D2',
    primaryFg: '#000000',
    secondary: '#8276B1',
    secondaryFg: '#000000',
    accent: '#38AAE4',
    accentFg: '#000000',
    border: '#222222',
    ring: '#617FBB',
    good: '#47AC98',
    goodFg: '#000000',
    warn: '#E39856',
    warnFg: '#000000',
    bad: '#C275BF',
    badFg: '#000000',
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
