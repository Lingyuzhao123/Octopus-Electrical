import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import config from "./assets/config.json";
import "./index.css";

export default function App() {
    const [cfg, setCfg] = useState(null);

    useEffect(() => {
        setCfg(config);
    }, []);

    if (!cfg) return null;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Header />
            <main className="pt-20">
                <section id="landing">
                    <Landing data={cfg.sections.landing} />
                </section>
                <section id="services">
                    <Services data={cfg.sections.services} />
                </section>
                <section id="projects">
                    <Projects data={cfg.sections.projects} />
                </section>
                <section id="contact">
                    <Contact data={cfg.sections.contact} />
                </section>
            </main>
            <Footer site={cfg.site} />
        </div>
    );
}
