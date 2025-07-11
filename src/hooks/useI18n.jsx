import { createContext, useContext, useEffect, useState } from 'react';
import config from "../assets/config.json";

// 创建 I18nContext
const I18nContext = createContext();

export function I18nProvider({ children }) {
    const defaultLocale = config.i18n.includes(navigator.language.slice(0, 2)) ? navigator.language.slice(0, 2) : 'en';
    const [locale, setLocale] = useState(defaultLocale);

    // 每次 locale 变化，可加入持久化（localStorage）
    useEffect(() => {
        localStorage.setItem('locale', locale);
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