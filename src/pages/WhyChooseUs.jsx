import { useI18n } from '../hooks/useI18n';

export default function WhyChooseUs({ onNavClick }) {
    const { locale } = useI18n();

    return (
        <div className="min-h-screen bg-brand-50 dark:bg-gray-800 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-6xl mx-auto">
                    {/* 主标题 */}
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-700 dark:text-white mb-6 tracking-wide animate-fade-in">
                        {locale === 'zh' ? '为什么选择我们' : 'Why Choose Us'}
                    </h2>
                    
                    {/* 副标题 */}
                    <p className="font-sans text-lg md:text-xl text-text-primary dark:text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-1">
                        {locale === 'zh' 
                            ? '我们是新西兰认证的专业电工团队，致力于为您提供最优质的电气和暖通空调服务' 
                            : 'We are certified professional electricians in New Zealand, committed to providing you with the highest quality electrical and HVAC services'
                        }
                    </p>
                    
                    {/* 认证标志 - 突出显示 */}
                    <div className="mb-16 flex justify-center animate-fade-in-delay-2">
                        <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-2xl max-w-sm mx-auto transform hover:scale-105 transition-transform duration-300 animate-pulse-slow">
                            <img 
                                src="./assets/quality-assured-badge.png" 
                                alt="Quality Assured Master Electrician"
                                className="h-32 w-auto mx-auto mb-4 animate-sparkle"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            <div className="hidden text-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-4xl">⭐</span>
                                </div>
                            </div>
                            <h3 className="font-heading text-lg font-semibold text-brand-700 dark:text-brand-300 text-center">
                                {locale === 'zh' ? '质量保证认证电工' : 'Quality Assured Master Electrician'}
                            </h3>
                            <p className="font-sans text-sm text-text-secondary dark:text-gray-400 text-center mt-2">
                                {locale === 'zh' ? '新西兰官方认证' : 'Officially Certified in New Zealand'}
                            </p>
                        </div>
                    </div>
                    
                    {/* 核心优势 - 统一的4列布局 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-hover animate-fade-in-delay-1">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                                <span className="text-3xl">✅</span>
                            </div>
                            <h3 className="font-heading text-xl font-semibold text-brand-700 dark:text-white mb-4">
                                {locale === 'zh' ? '免费评估报价' : 'Free Assessment'}
                            </h3>
                            <p className="font-sans text-text-secondary dark:text-gray-400 leading-relaxed">
                                {locale === 'zh' ? '提供免费现场评估和详细报价，让您了解项目成本' : 'Free on-site assessment and detailed quotes to help you understand project costs'}
                            </p>
                        </div>
                        
                        <div className="text-center bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-hover animate-fade-in-delay-2">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                                <span className="text-3xl">👨‍🔧</span>
                            </div>
                            <h3 className="font-heading text-xl font-semibold text-brand-700 dark:text-white mb-4">
                                {locale === 'zh' ? '持证专业电工' : 'Licensed Professionals'}
                            </h3>
                            <p className="font-sans text-text-secondary dark:text-gray-400 leading-relaxed">
                                {locale === 'zh' ? '所有电工都持有新西兰官方执照，专业技能有保障' : 'All electricians are officially licensed in New Zealand with guaranteed professional skills'}
                            </p>
                        </div>
                        
                        <div className="text-center bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-hover animate-fade-in-delay-3">
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                                <span className="text-3xl">🛡️</span>
                            </div>
                            <h3 className="font-heading text-xl font-semibold text-brand-700 dark:text-white mb-4">
                                {locale === 'zh' ? '质量保证' : 'Quality Guaranteed'}
                            </h3>
                            <p className="font-sans text-text-secondary dark:text-gray-400 leading-relaxed">
                                {locale === 'zh' ? '所有工作都提供质量保证，确保您的投资物有所值' : 'All work comes with quality guarantee, ensuring your investment is worthwhile'}
                            </p>
                        </div>
                        
                        <div className="text-center bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-hover animate-fade-in-delay-3">
                            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <h3 className="font-heading text-xl font-semibold text-brand-700 dark:text-white mb-4">
                                {locale === 'zh' ? '及时响应' : 'Prompt Service'}
                            </h3>
                            <p className="font-sans text-text-secondary dark:text-gray-400 leading-relaxed">
                                {locale === 'zh' ? '快速响应客户需求，提供及时可靠的专业服务' : 'Quick response to customer needs with timely and reliable professional service'}
                            </p>
                        </div>
                    </div>
                    
                    {/* 底部CTA */}
                    <div className="mt-16 text-center animate-fade-in-delay-3">
                        <p className="font-sans text-lg text-text-primary dark:text-gray-300 mb-8">
                            {locale === 'zh' 
                                ? '准备体验我们的专业服务了吗？' 
                                : 'Ready to experience our professional service?'
                            }
                        </p>
                        <button 
                            onClick={() => onNavClick && onNavClick('contact')}
                            className="font-sans bg-brand-600 hover:bg-brand-700 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 tracking-wide button-glow"
                        >
                            {locale === 'zh' ? '立即联系我们' : 'Contact Us Now'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
