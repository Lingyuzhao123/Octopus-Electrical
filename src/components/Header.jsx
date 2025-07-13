import { useState, useEffect } from "react";
import config from "../assets/config.json";
import { useTheme } from "../hooks/useTheme";
import { useI18n } from "../hooks/useI18n";

export default function Header({ onNavClick }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { locale, setLocale } = useI18n();

    // 处理菜单导航点击
    const handleNavClick = (section) => {
        onNavClick(section);
        setIsMenuOpen(false); // 导航后关闭菜单
    };

    // 处理ESC键关闭菜单
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('keydown', handleEscapeKey);
            // 防止页面滚动
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>
            <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md h-20 xs:h-22 sm:h-24 desktop-2k:h-28 desktop-4k:h-32 min-w-mobile">
                <div className="container mx-auto flex items-center justify-between p-3 xs:p-4 sm:p-6 desktop-sm:p-6 desktop:p-8 desktop-2k:p-10 desktop-4k:p-12 h-full safe-area-inset-x max-w-7xl desktop-2k:max-w-8xl desktop-4k:max-w-9xl">
                    {/* Logo */}
                    <button 
                        onClick={() => handleNavClick('home')} 
                        className="flex items-center flex-shrink-0 z-50 min-w-0"
                    >
                        <img 
                            src={config.site.logo} 
                            alt={config.site.title[locale]} 
                            className="h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 desktop:h-16 desktop:w-16 desktop-2k:h-18 desktop-2k:w-18 desktop-4k:h-20 desktop-4k:w-20 object-contain rounded-md flex-shrink-0"
                            style={{ 
                                height: 'clamp(32px, 4vw, 80px)', 
                                width: 'clamp(32px, 4vw, 80px)',
                                maxHeight: '80px',
                                maxWidth: '80px'
                            }}
                        />
                        <span className="ml-2 sm:ml-3 md:ml-4 desktop:ml-5 desktop-2k:ml-6 desktop-4k:ml-8 font-heading font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl desktop:text-2xl desktop-2k:text-3xl desktop-4k:text-4xl text-brand-700 dark:text-white truncate">
                            <span className="hidden sm:inline">{config.site.title[locale]}</span>
                            <span className="sm:hidden">{config.site.title[locale].split(' ')[0]}</span>
                        </span>
                    </button>

                    {/* 桌面导航菜单 */}
                    <nav className="hidden lg:flex lg:items-center space-x-2 desktop:space-x-4 desktop-2k:space-x-6 desktop-4k:space-x-8">
                        <ul className="flex items-center space-x-1 desktop:space-x-2 desktop-2k:space-x-3 desktop-4k:space-x-4">
                            {["home", "services", "projects", "why-choose-us", "contact"].map((sec) => (
                                <li key={sec}>
                                    <button
                                        onClick={() => handleNavClick(sec)}
                                        className="font-sans py-2 px-3 lg:py-3 lg:px-4 desktop:py-4 desktop:px-6 desktop-2k:py-5 desktop-2k:px-8 desktop-4k:py-6 desktop-4k:px-10 text-sm lg:text-base desktop:text-lg desktop-2k:text-xl desktop-4k:text-2xl font-semibold tracking-wide text-center transition-all duration-300 rounded-lg relative overflow-hidden text-brand-700 dark:text-white hover:text-brand-600 dark:hover:text-brand-300 hover:bg-brand-50 dark:hover:bg-gray-700"
                                        style={{ minWidth: 'clamp(80px, 6vw, 160px)' }}
                                    >
                                        {config.navigation[sec][locale]}
                                    </button>
                                </li>
                            ))}
                            {/* 桌面主题切换 */}
                            <li>
                                <button 
                                    onClick={toggleTheme} 
                                    className="p-2 lg:p-2 desktop:p-3 desktop-2k:p-4 desktop-4k:p-5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400"
                                    aria-label="Toggle theme"
                                >
                                    {theme === "light" ? (
                                        <svg className="w-4 h-4 desktop:w-5 desktop:h-5 desktop-2k:w-6 desktop-2k:h-6 desktop-4k:w-7 desktop-4k:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4 desktop:w-5 desktop:h-5 desktop-2k:w-6 desktop-2k:h-6 desktop-4k:w-7 desktop-4k:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    )}
                                </button>
                            </li>
                            {/* 桌面语言切换 */}
                            <li>
                                <button 
                                    onClick={() => setLocale(locale === 'en' ? 'zh' : 'en')}
                                    className="p-2 lg:p-2 desktop:p-3 desktop-2k:p-4 desktop-4k:p-5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 flex items-center"
                                    aria-label="Toggle language"
                                    title={locale === 'en' ? 'Switch to Chinese' : 'Switch to English'}
                                >
                                    <svg className="w-3 h-3 desktop:w-4 desktop:h-4 desktop-2k:w-5 desktop-2k:h-5 desktop-4k:w-6 desktop-4k:h-6 mr-1 desktop-2k:mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                    </svg>
                                    <span className="text-xs desktop:text-sm desktop-2k:text-base desktop-4k:text-lg font-medium">
                                        {locale === 'en' ? '中' : 'EN'}
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </nav>

                    {/* 汉堡按钮 - 移动端 */}
                    <button
                        className="lg:hidden relative z-50 p-2 xs:p-3 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 flex-shrink-0"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-6 sm:h-6 relative">
                            {/* 汉堡图标动画 */}
                            <span 
                                className={`absolute left-0 top-1 h-0.5 w-full bg-gray-800 dark:bg-white transition-all duration-300 ease-in-out ${
                                    isMenuOpen ? 'rotate-45 top-2.5' : ''
                                }`}
                            />
                            <span 
                                className={`absolute left-0 top-2.5 h-0.5 w-full bg-gray-800 dark:bg-white transition-all duration-300 ease-in-out ${
                                    isMenuOpen ? 'opacity-0' : ''
                                }`}
                            />
                            <span 
                                className={`absolute left-0 top-4 h-0.5 w-full bg-gray-800 dark:bg-white transition-all duration-300 ease-in-out ${
                                    isMenuOpen ? '-rotate-45 top-2.5' : ''
                                }`}
                            />
                        </div>
                    </button>
                </div>
            </header>

            {/* 移动端导航菜单覆盖层 */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* 移动端导航菜单 */}
            <nav 
                className={`fixed top-20 xs:top-22 sm:top-24 desktop-2k:top-28 desktop-4k:top-32 left-0 w-full bg-white dark:bg-gray-800 shadow-xl border-t border-gray-200 dark:border-gray-700 z-50 lg:hidden transform transition-all duration-300 ease-in-out min-w-mobile ${
                    isMenuOpen 
                        ? 'translate-y-0 opacity-100 visible' 
                        : '-translate-y-full opacity-0 invisible'
                }`}
            >
                <div className="container mx-auto p-3 xs:p-4 sm:p-4 tablet:p-6 max-h-screen overflow-y-auto safe-area-inset-x">
                    <ul className="space-y-1 xs:space-y-2">
                        {["home", "services", "projects", "why-choose-us", "contact"].map((sec, index) => (
                            <li key={sec}>
                                <button
                                    onClick={() => handleNavClick(sec)}
                                    className={`font-sans block w-full py-3 px-4 xs:py-4 xs:px-6 text-sm xs:text-base sm:text-lg tablet:text-xl font-semibold text-left transition-all duration-300 rounded-lg text-brand-700 dark:text-white hover:text-brand-600 dark:hover:text-brand-300 hover:bg-brand-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-600 last:border-b-0 ${
                                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                                    }`}
                                    style={{ 
                                        transitionDelay: `${index * 50}ms`
                                    }}
                                >
                                    {config.navigation[sec][locale]}
                                </button>
                            </li>
                        ))}
                        
                        {/* 移动端控制按钮 */}
                        <li className="border-t border-gray-200 dark:border-gray-600 pt-3 mt-3">
                            <div className="flex justify-center space-x-3 xs:space-x-4 sm:space-x-6">
                                {/* 移动端主题切换 */}
                                <button 
                                    onClick={() => {
                                        toggleTheme();
                                        setIsMenuOpen(false);
                                    }}
                                    className="flex items-center space-x-2 p-2 xs:p-3 sm:p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 text-sm"
                                    aria-label="Toggle theme"
                                >
                                    {theme === "light" ? (
                                        <>
                                            <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                            </svg>
                                            <span className="text-xs xs:text-sm sm:text-sm">{locale === 'zh' ? '深色' : 'Dark'}</span>
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                            <span className="text-xs xs:text-sm sm:text-sm">{locale === 'zh' ? '浅色' : 'Light'}</span>
                                        </>
                                    )}
                                </button>
                                
                                {/* 移动端语言切换 */}
                                <button 
                                    onClick={() => {
                                        setLocale(locale === 'en' ? 'zh' : 'en');
                                        setIsMenuOpen(false);
                                    }}
                                    className="flex items-center space-x-2 p-2 xs:p-3 sm:p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 text-sm"
                                    aria-label="Toggle language"
                                >
                                    <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                    </svg>
                                    <span className="text-xs xs:text-sm sm:text-sm">
                                        {locale === 'en' ? '中文' : 'English'}
                                    </span>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
