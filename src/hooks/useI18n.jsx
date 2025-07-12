import { createContext, useContext, useEffect, useState } from 'react';
import config from "../assets/config.json";

// 创建 I18nContext
const I18nContext = createContext();

export function I18nProvider({ children }) {
    // 安全地获取默认语言
    const getDefaultLocale = () => {
        try {
            // 首先尝试从 localStorage 获取保存的语言设置
            if (typeof localStorage !== 'undefined') {
                const savedLocale = localStorage.getItem('locale');
                if (savedLocale && config.i18n.includes(savedLocale)) {
                    return savedLocale;
                }
            }
            
            // 如果没有保存的设置，则使用浏览器语言
            const browserLang = typeof navigator !== 'undefined' ? navigator.language.slice(0, 2) : 'en';
            return config.i18n.includes(browserLang) ? browserLang : 'en';
        } catch (error) {
            console.warn('Error getting browser language:', error);
            return 'en';
        }
    };

    const [locale, setLocale] = useState(getDefaultLocale);

    // 每次 locale 变化，可加入持久化（localStorage）
    useEffect(() => {
        try {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('locale', locale);
            }
        } catch (error) {
            console.warn('Error saving locale to localStorage:', error);
        }
    }, [locale]);

    return (
        <I18nContext.Provider value={{ locale, setLocale }}>
            {children}
        </I18nContext.Provider>
    );
}

// 自定义 Hook
export function useI18n() {
    return useContext(I18nContext);
}