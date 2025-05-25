import EventEmitter from 'eventemitter3';

type ThemeEvents = {
  themeChanged: (newTheme: 'light' | 'dark' | 'system') => void;
};

const themeEventEmitter = new EventEmitter<ThemeEvents>();

export default themeEventEmitter;
