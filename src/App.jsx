import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import WhyChooseUs from "./pages/WhyChooseUs";
import Contact from "./pages/Contact";
import { useFullPageScroll } from "./hooks/useFullPageScroll";
import config from "./assets/config.json";
import "./index.css";

const sections = ['home', 'services', 'projects', 'why-choose-us', 'contact'];

export default function App() {
    const [cfg, setCfg] = useState(null);
    const { currentSection, containerRef, handleNavClick, isScrolling } = useFullPageScroll(sections);

    useEffect(() => {
        setCfg(config);
    }, []);

    if (!cfg) return null;

    return (
        <div 
            ref={containerRef}
            className="h-screen overflow-hidden bg-brand-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        >
            <Header onNavClick={handleNavClick} currentSection={currentSection} />
            <main className="h-full relative">
                {/* Section Container */}
                <div 
                    className="flex flex-col h-full transition-transform duration-1000 ease-in-out"
                    style={{
                        transform: `translateY(-${currentSection * 100}vh)`,
                    }}
                >
                    {/* Home Section */}
                    <section 
                        id="home" 
                        className="h-screen flex-shrink-0 relative"
                        style={{
                            opacity: currentSection === 0 ? 1 : 0.7,
                            transition: 'opacity 0.5s ease-in-out'
                        }}
                    >
                        <Home data={cfg.sections.home} onNavClick={handleNavClick} />
                    </section>

                    {/* Services Section */}
                    <section 
                        id="services" 
                        className="h-screen flex-shrink-0 relative overflow-y-auto custom-scrollbar"
                        style={{
                            opacity: currentSection === 1 ? 1 : 0.7,
                            transition: 'opacity 0.5s ease-in-out'
                        }}
                    >
                        <Services data={cfg.sections.services} />
                    </section>

                    {/* Projects Section */}
                    <section 
                        id="projects" 
                        className="h-screen flex-shrink-0 relative overflow-y-auto custom-scrollbar"
                        style={{
                            opacity: currentSection === 2 ? 1 : 0.7,
                            transition: 'opacity 0.5s ease-in-out'
                        }}
                    >
                        <Projects data={cfg.sections.projects} onNavClick={handleNavClick} />
                    </section>



                    {/* Contact Section */}
                    <section 
                        id="contact" 
                        className="h-screen flex-shrink-0 relative overflow-y-auto custom-scrollbar"
                        style={{
                            opacity: currentSection === 4 ? 1 : 0.7,
                            transition: 'opacity 0.5s ease-in-out'
                        }}
                    >
                        <Contact data={cfg.sections.contact} />
                    </section>

                                        {/* Why Choose Us Section */}
                    <section 
                        id="why-choose-us" 
                        className="h-screen flex-shrink-0 relative overflow-y-auto custom-scrollbar"
                        style={{
                            opacity: currentSection === 3 ? 1 : 0.7,
                            transition: 'opacity 0.5s ease-in-out'
                        }}
                    >
                        <WhyChooseUs onNavClick={handleNavClick} />
                    </section>
                </div>

                {/* Loading indicator during transitions */}
                {isScrolling && (
                    <div className="fixed inset-0 z-40 bg-black bg-opacity-10 flex items-center justify-center pointer-events-none">
                        <div className="w-8 h-8 border-2 border-brand-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
            </main>
            
            {/* Footer只在最后一个section显示 */}
            {currentSection === sections.length - 1 && (
                <div className="absolute bottom-0 left-0 right-0 z-30">
                    <Footer site={cfg.site} />
                </div>
            )}
        </div>
    );
}
