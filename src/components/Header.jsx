import { useState } from "react";
import config from "../assets/config.json";
import { useTheme } from "../hooks/useTheme";
import { useI18n } from "../hooks/useI18n";

export default function Header({ onNavClick }) {
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
                        className="h-12 w-12 md:h-16 md:w-16 object-contain rounded-md"
                        style={{ 
                            height: 'clamp(48px, 4vw, 64px)', 
                            width: 'clamp(48px, 4vw, 64px)',
                            maxHeight: '64px',
                            maxWidth: '64px'
                        }}
                    />
                    <span className="ml-2 md:ml-4 font-heading font-bold text-xl md:text-3xl text-brand-700 dark:text-white">
                        <span className="hidden sm:inline">{config.site.title[locale]}</span>
                        <span className="sm:hidden">{config.site.title[locale].split(' ')[0]}</span>
                    </span>
                </button>

                {/* 汉堡按钮 - 窄屏 */}
                <button
                    className="lg:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
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
                    className={`absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700 lg:static lg:w-auto lg:shadow-none lg:border-0 transition-all duration-300 ease-in-out z-40 ${
                        open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 lg:translate-y-0 lg:opacity-100"
                    }`}
                >
                    <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-3 p-4 lg:p-0">
                        {["home", "services", "projects", "why-choose-us", "contact"].map((sec) => {
                            return (
                                <li key={sec}>
                                    <button
                                        onClick={() => {
                                            onNavClick(sec);
                                            setOpen(false);
                                        }}
                                        className="font-sans block py-3 px-4 lg:py-4 lg:px-8 text-lg lg:text-xl font-semibold tracking-wide w-full text-left lg:text-center transition-all duration-300 rounded-lg relative overflow-hidden text-brand-700 dark:text-white hover:text-brand-600 dark:hover:text-brand-300 hover:bg-brand-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-600 lg:border-0"
                                        style={{ minWidth: 'auto', 'lg:minWidth': '120px' }}
                                    >
                                        {config.navigation[sec][locale]}
                                    </button>
                                </li>
                            );
                        })}
                        {/* 主题切换 */}
                        <li className="mt-2 lg:mt-0 flex justify-center lg:block">
                            <button 
                                onClick={toggleTheme} 
                                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400"
                                aria-label="Toggle theme"
                            >
                                {theme === "light" ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                )}
                            </button>
                        </li>
                        {/* 语言切换 */}
                        <li className="mt-2 lg:mt-0 flex justify-center lg:block">
                            <button 
                                onClick={() => setLocale(locale === 'en' ? 'zh' : 'en')}
                                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 flex items-center"
                                aria-label="Toggle language"
                                title={locale === 'en' ? 'Switch to Chinese' : 'Switch to English'}
                            >
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                </svg>
                                <span className="text-sm font-medium">
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
