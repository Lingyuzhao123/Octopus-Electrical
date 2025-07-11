import { createContext, useContext, useEffect, useState } from 'react';

// 创建 ThemeContext
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    // 安全地检测系统偏好
    const getInitialTheme = () => {
        try {
            if (typeof window !== 'undefined' && window.matchMedia) {
                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            return 'light';
        } catch (error) {
            console.warn('Error detecting theme preference:', error);
            return 'light';
        }
    };

    const [theme, setTheme] = useState(getInitialTheme);

    // 切换主题
    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    // 在 body 上挂 class
    useEffect(() => {
        try {
            if (typeof document !== 'undefined' && document.documentElement) {
                document.documentElement.classList.toggle('dark', theme === 'dark');
            }
        } catch (error) {
            console.warn('Error setting theme class:', error);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// 自定义 Hook
export function useTheme() {
    return useContext(ThemeContext);
}