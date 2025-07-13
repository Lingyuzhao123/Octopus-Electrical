import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
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
            <main>
                <section id="home" className="pt-20">
                    <Home data={cfg.sections.home} />
                </section>
                <section id="services" className="pt-20">
                    <Services data={cfg.sections.services} />
                </section>
                <section id="projects" className="pt-20">
                    <Projects data={cfg.sections.projects} />
                </section>
                <section id="contact" className="pt-20">
                    <Contact data={cfg.sections.contact} />
                </section>
            </main>
            <Footer site={cfg.site} />
        </div>
    );
}
