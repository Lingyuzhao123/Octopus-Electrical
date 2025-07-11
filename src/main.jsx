import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./hooks/useTheme";
import { I18nProvider } from "./hooks/useI18n";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider>
            <I18nProvider>
                <App />
            </I18nProvider>
        </ThemeProvider>
    </StrictMode>
);
