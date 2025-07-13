import { useState } from "react";
import config from "../assets/config.json";
import { useTheme } from "../hooks/useTheme";
import { useI18n } from "../hooks/useI18n";

export default function Header({ onNavClick, currentSection }) {
    const [open, setOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { locale, setLocale } = useI18n();

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md h-24">
            <div className="container mx-auto flex items-center justify-between p-6 h-full">
                {/* Logo */}
                <button onClick={() => onNavClick('home')} className="flex items-center flex-shrink-0">
                    <img 
                        src={config.site.logo} 
                        alt={config.site.title[locale]} 
                        className="h-16 w-16 object-contain rounded-md"
                        style={{ 
                            height: '64px', 
                            width: '64px',
                            maxHeight: '64px',
                            maxWidth: '64px'
                        }}
                    />
                    <span className="ml-4 font-heading font-bold text-3xl text-brand-700 dark:text-white">
                        {config.site.title[locale]}
                    </span>
                </button>

                {/* 汉堡按钮 - 窄屏 */}
                <button
                    className="md:hidden p-2 rounded focus:outline-none focus:ring"
                    onClick={() => setOpen((o) => !o)}
                    aria-label="Toggle menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-800 dark:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                {/* 菜单项 */}
                <nav
                    className={`absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg md:static md:w-auto md:shadow-none transition-all duration-300 ease-in-out ${
                        open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 md:translate-y-0 md:opacity-100"
                    }`}
                >
                    <ul className="flex flex-col md:flex-row md:items-center md:space-x-3 p-4 md:p-0">
                        {["home", "services", "projects", "contact"].map((sec, index) => {
                            const isActive = currentSection === index;
                            return (
                                <li key={sec}>
                                    <button
                                        onClick={() => {
                                            onNavClick(sec);
                                            setOpen(false);
                                        }}
                                        className={`font-sans block py-4 px-8 text-xl font-semibold tracking-wide w-full text-left md:text-center transition-all duration-300 rounded-lg relative overflow-hidden ${
                                            isActive 
                                                ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20' 
                                                : 'text-brand-700 dark:text-white hover:text-brand-600 dark:hover:text-brand-300 hover:bg-brand-50 dark:hover:bg-gray-700'
                                        }`}
                                        style={{ minWidth: '120px' }}
                                    >
                                        {config.navigation[sec][locale]}
                                        {isActive && (
                                            <div className="absolute inset-0 border-2 border-brand-400 rounded-lg animate-electric-border"></div>
                                        )}
                                    </button>
                                </li>
                            );
                        })}
                        {/* 主题切换 */}
                        <li className="mt-2 md:mt-0">
                            <button 
                                onClick={toggleTheme} 
                                className="px-5 py-4 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center"
                                style={{ minWidth: '70px' }}
                                aria-label="Toggle theme"
                            >
                                {theme === "light" ? (
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
                                    </svg>
                                )}
                            </button>
                        </li>
                        {/* 语言切换 */}
                        <li className="mt-2 md:mt-0">
                            <button 
                                onClick={() => setLocale(locale === 'en' ? 'zh' : 'en')}
                                className="px-5 py-4 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center"
                                style={{ minWidth: '90px' }}
                                aria-label="Toggle language"
                                title={locale === 'en' ? 'Switch to Chinese' : 'Switch to English'}
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                </svg>
                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    {locale === 'en' ? '中' : 'EN'}
                                </span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
