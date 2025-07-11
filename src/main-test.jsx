import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// 简化的 App 组件用于测试
function TestApp() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>🎉 React App 成功加载！</h1>
            <p>如果您看到这个消息，说明 React 应用已经正常工作了。</p>
            <p>时间：{new Date().toLocaleString()}</p>
        </div>
    );
}

// 确保 DOM 元素存在
const rootElement = document.getElementById("root");
if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <TestApp />
        </StrictMode>
    );
} else {
    console.error('Root element not found!');
}
