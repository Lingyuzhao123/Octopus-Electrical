import { createContext, useContext, useEffect, useState } from 'react';

// 创建 ThemeContext
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    // 初始检测系统偏好
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(prefersDark ? 'dark' : 'light');

    // 切换主题
    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    // 在 body 上挂 class
    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
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