import { create } from 'zustand'

export const useThemeStore = create((set) => ({
    themeName: 'defaultTheme',
    setThemeName: (theme) => set({ themeName: theme }),
}));
