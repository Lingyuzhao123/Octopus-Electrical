import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./hooks/useTheme";
import { I18nProvider } from "./hooks/useI18n";

// 错误边界组件
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('React Error Boundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                    <h1>出现了错误</h1>
                    <p>应用加载时出现了问题。</p>
                    <details>
                        <summary>错误详情</summary>
                        <pre>{this.state.error?.toString()}</pre>
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}

// 确保 DOM 元素存在
const rootElement = document.getElementById("root");
if (rootElement) {
    try {
        createRoot(rootElement).render(
            <StrictMode>
                <ErrorBoundary>
                    <ThemeProvider>
                        <I18nProvider>
                            <App />
                        </I18nProvider>
                    </ThemeProvider>
                </ErrorBoundary>
            </StrictMode>
        );
    } catch (error) {
        console.error('Error rendering app:', error);
        rootElement.innerHTML = `
            <div style="padding: 20px; font-family: Arial, sans-serif;">
                <h1>应用启动失败</h1>
                <p>React 应用无法正常启动。</p>
                <pre>${error.toString()}</pre>
            </div>
        `;
    }
} else {
    console.error('Root element not found!');
}
