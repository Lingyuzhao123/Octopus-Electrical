/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                // 自定义紫色主题
                brand: {
                    50: '#f3f1ff',   // 浅紫色背景
                    100: '#ede9fe',  // 更浅的紫色
                    200: '#ddd6fe',  // 卡片背景
                    300: '#c4b5fd',  // 边框
                    400: '#a78bfa',  // 次要元素
                    500: '#8b5cf6',  // 主要紫色
                    600: '#7c3aed',  // 深紫色标题
                    700: '#6d28d9',  // 更深紫色
                    800: '#5b21b6',  // 深色
                    900: '#4c1d95',  // 最深
                },
                // 文本颜色
                text: {
                    primary: '#1f2937',     // 深灰色主文本
                    secondary: '#4b5563',   // 中灰色副文本
                    muted: '#6b7280',       // 浅灰色辅助文本
                }
            },
            backgroundImage: {
                'gradient-brand': 'linear-gradient(135deg, #f3f1ff 0%, #ede9fe 100%)',
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
                'heading': ['Poppins', 'system-ui', 'sans-serif'],
            },
            letterSpacing: {
                'wide': '0.025em',
                'wider': '0.05em',
                'widest': '0.1em',
            },
            lineHeight: {
                'relaxed': '1.6',
                'loose': '1.75',
            }
        },
    },
    plugins: [],
}