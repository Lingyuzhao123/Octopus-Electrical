import { useI18n } from '../hooks/useI18n';

export default function Home({ data, onNavClick }) {
    const { locale } = useI18n();

    if (!data) return null;

    return (
        <div className="min-h-screen bg-gradient-brand dark:bg-gray-900 flex items-center pt-24 pb-16">
            <div className="container mx-auto px-4 py-20">
                <div className="text-center max-w-5xl mx-auto">
                    {/* 主标题 */}
                    <h1 className="font-heading text-5xl md:text-6xl font-bold text-brand-700 dark:text-gray-100 mb-8 leading-tight md:leading-tight tracking-wide animate-fade-in">
                        {data.heading[locale]}
                    </h1>
                    
                    {/* 副标题 */}
                    <p className="font-sans text-xl md:text-2xl text-text-primary dark:text-gray-300 mb-12 leading-snug max-w-3xl mx-auto tracking-wide animate-fade-in-delay-1">
                        {data.subheading[locale]}
                    </p>
                    
                    {/* CTA 按钮 */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay-2">
                        <button 
                            onClick={() => onNavClick && onNavClick('contact')}
                            className="font-sans bg-brand-600 hover:bg-brand-700 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 tracking-wide button-glow"
                        >
                            {data.cta[locale]}
                        </button>
                        <a 
                            href="tel:021024681460" 
                            className="font-sans bg-white dark:bg-gray-700 hover:bg-brand-50 dark:hover:bg-gray-600 text-brand-700 dark:text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 text-2xl shadow-xl hover:shadow-2xl border border-brand-200 dark:border-gray-600 transform hover:-translate-y-1 tracking-wide"
                        >
                            📞 <span className="font-georgia">021 024 68146</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
