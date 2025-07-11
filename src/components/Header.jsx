import { useState, useEffect } from "react";
import config from "../assets/config.json";
import { useTheme } from "../hooks/useTheme";
import { useI18n } from "../hooks/useI18n";

export default function Header() {
    const [open, setOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { locale, setLocale } = useI18n();

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <a href="#landing" className="flex items-center flex-shrink-0">
                    <img 
                        src={config.site.logo} 
                        alt={config.site.title} 
                        className="h-12 w-12 object-contain rounded-md"
                        style={{ 
                            height: '48px', 
                            width: '48px',
                            maxHeight: '48px',
                            maxWidth: '48px'
                        }}
                    />
                    <span className="ml-3 font-bold text-xl text-gray-800 dark:text-white">
                        {config.site.title}
                    </span>
                </a>

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
                    <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 p-4 md:p-0">
                        {["landing", "services", "projects", "contact"].map((sec) => (
                            <li key={sec}>
                                <a
                                    href={`#${sec}`}
                                    className="block py-2 text-gray-800 dark:text-white hover:underline"
                                    onClick={() => setOpen(false)}
                                >
                                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                                </a>
                            </li>
                        ))}
                        {/* 主题切换 */}
                        <li className="mt-2 md:mt-0">
                            <button 
                                onClick={toggleTheme} 
                                className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                aria-label="Toggle theme"
                            >
                                {theme === "light" ? "🌞" : "🌙"}
                            </button>
                        </li>
                        {/* 语言切换 */}
                        <li className="mt-2 md:mt-0">
                            <select
                                value={locale}
                                onChange={(e) => setLocale(e.target.value)}
                                className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {config.i18n.map((lang) => (
                                    <option key={lang} value={lang} className="bg-gray-100 dark:bg-gray-700">
                                        {lang.toUpperCase()}
                                    </option>
                                ))}
                            </select>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
