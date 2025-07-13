import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import WhyChooseUs from "./pages/WhyChooseUs";
import Contact from "./pages/Contact";
import config from "./assets/config.json";
import "./index.css";

export default function App() {
    const [cfg, setCfg] = useState(null);

    useEffect(() => {
        setCfg(config);
    }, []);

    // 简单的滚动到指定section函数
    const handleNavClick = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    if (!cfg) return null;

    return (
        <div className="bg-brand-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <Header onNavClick={handleNavClick} />
            <main>
                {/* Home Section */}
                <section id="home">
                    <Home data={cfg.sections.home} onNavClick={handleNavClick} />
                </section>

                {/* Services Section */}
                <section id="services">
                    <Services data={cfg.sections.services} />
                </section>

                {/* Projects Section */}
                <section id="projects">
                    <Projects data={cfg.sections.projects} onNavClick={handleNavClick} />
                </section>

                {/* Why Choose Us Section */}
                <section id="why-choose-us">
                    <WhyChooseUs onNavClick={handleNavClick} />
                </section>

                {/* Contact Section */}
                <section id="contact">
                    <Contact data={cfg.sections.contact} />
                </section>
            </main>
            
            {/* Footer */}
            <Footer site={cfg.site} />
        </div>
    );
}
