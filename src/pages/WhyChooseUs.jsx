import { useI18n } from '../hooks/useI18n';

export default function WhyChooseUs({ onNavClick }) {
    const { locale } = useI18n();

    return (
        <div className="min-h-screen bg-brand-50 dark:bg-gray-800 pt-20 xs:pt-22 sm:pt-24 desktop-2k:pt-28 desktop-4k:pt-32 pb-16 xs:pb-20 sm:pb-24 desktop-2k:pb-32 desktop-4k:pb-40">
            <div className="container mx-auto px-3 xs:px-4 sm:px-6 desktop-sm:px-8 desktop:px-10 desktop-2k:px-12 desktop-4k:px-16 max-w-7xl desktop-2k:max-w-8xl desktop-4k:max-w-9xl">
                <div className="text-center mx-auto">
                    {/* 主标题 */}
                    <div className="mt-6 xs:mt-8 sm:mt-8">
                        <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl desktop:text-6xl desktop-2k:text-7xl desktop-4k:text-8xl font-bold text-brand-700 dark:text-white mb-4 xs:mb-6 sm:mb-6 tracking-wide animate-fade-in">
                            {locale === 'zh' ? '为什么选择我们' : 'Why Choose Us'}
                        </h2>
                        
                        {/* 副标题 */}
                        <p className="font-sans text-sm xs:text-base sm:text-lg md:text-xl desktop:text-2xl desktop-2k:text-3xl desktop-4k:text-4xl text-text-primary dark:text-gray-300 mb-12 xs:mb-16 sm:mb-16 desktop-2k:mb-20 desktop-4k:mb-24 max-w-2xl tablet:max-w-3xl desktop:max-w-5xl desktop-2k:max-w-6xl desktop-4k:max-w-7xl mx-auto leading-relaxed animate-fade-in-delay-1">
                            {locale === 'zh' 
                                ? '我们是新西兰认证的专业电工团队，致力于为您提供最优质的电气和暖通空调服务' 
                                : 'We are certified professional electricians in New Zealand, committed to providing you with the highest quality electrical and HVAC services'
                            }
                        </p>
                    </div>
                    
                    {/* 所有卡片统一布局 - 包括认证徽章在内的5卡片网格 */}
                    <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 tablet:grid-cols-2 lg:grid-cols-3 desktop:grid-cols-5 desktop-2k:grid-cols-5 desktop-4k:grid-cols-5 gap-4 xs:gap-6 sm:gap-8 desktop:gap-6 desktop-2k:gap-8 desktop-4k:gap-10">
                        
                        {/* 认证标志卡片 - 与其他卡片统一样式 */}
                        <div className="text-center bg-white dark:bg-gray-900 rounded-xl p-6 xs:p-8 sm:p-8 desktop:p-6 desktop-2k:p-8 desktop-4k:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-hover animate-fade-in-delay-1">
                            <div className="flex flex-col items-center h-full">
                                <img 
                                    src="/assets/quality-assured-badge.jpg" 
                                    alt="Quality Assured Master Electrician"
                                    className="h-16 xs:h-20 sm:h-20 desktop:h-16 desktop-2k:h-20 desktop-4k:h-24 w-auto mx-auto mb-3 xs:mb-4 sm:mb-4 desktop:mb-3 desktop-2k:mb-4 desktop-4k:mb-6 animate-sparkle"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="hidden w-16 h-16 xs:w-20 xs:h-20 sm:w-20 sm:h-20 desktop:w-16 desktop:h-16 desktop-2k:w-20 desktop-2k:h-20 desktop-4k:w-24 desktop-4k:h-24 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full items-center justify-center mx-auto mb-3 xs:mb-4 sm:mb-4 desktop:mb-3 desktop-2k:mb-4 desktop-4k:mb-6">
                                    <span className="text-2xl xs:text-3xl sm:text-3xl desktop:text-2xl desktop-2k:text-3xl desktop-4k:text-4xl">⭐</span>
                                </div>
                                <h3 className="font-heading text-base xs:text-lg sm:text-lg desktop:text-base desktop-2k:text-lg desktop-4k:text-xl font-semibold text-brand-700 dark:text-brand-300 text-center mb-2 desktop:mb-2 desktop-2k:mb-3 desktop-4k:mb-4">
                                    {locale === 'zh' ? '质量保证认证' : 'Quality Assured'}
                                </h3>
                                <p className="font-sans text-xs xs:text-sm sm:text-sm desktop:text-xs desktop-2k:text-sm desktop-4k:text-base text-text-secondary dark:text-gray-400 text-center leading-relaxed flex-1">
                                    {locale === 'zh' ? '新西兰官方认证电工' : 'NZ Certified Master Electrician'}
                                </p>
                            </div>
                        </div>
                        
                        {/* 免费评估卡片 */}
                        <div className="text-center bg-white dark:bg-gray-900 rounded-xl p-6 xs:p-8 sm:p-8 desktop:p-6 desktop-2k:p-8 desktop-4k:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-hover animate-fade-in-delay-2">
                            <div className="flex flex-col items-center h-full">
                                <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-20 sm:h-20 desktop:w-16 desktop:h-16 desktop-2k:w-20 desktop-2k:h-20 desktop-4k:w-24 desktop-4k:h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4 sm:mb-4 desktop:mb-3 desktop-2k:mb-4 desktop-4k:mb-6 animate-pulse-slow">
                                    <span className="text-2xl xs:text-3xl sm:text-3xl desktop:text-2xl desktop-2k:text-3xl desktop-4k:text-4xl">✅</span>
                                </div>
                                <h3 className="font-heading text-base xs:text-lg sm:text-lg desktop:text-base desktop-2k:text-lg desktop-4k:text-xl font-semibold text-brand-700 dark:text-white mb-2 desktop:mb-2 desktop-2k:mb-3 desktop-4k:mb-4">
                                    {locale === 'zh' ? '免费评估报价' : 'Free Assessment'}
                                </h3>
                                <p className="font-sans text-xs xs:text-sm sm:text-sm desktop:text-xs desktop-2k:text-sm desktop-4k:text-base text-text-secondary dark:text-gray-400 leading-relaxed text-center flex-1">
                                    {locale === 'zh' ? '提供免费现场评估和详细报价' : 'Free on-site assessment and detailed quotes'}
                                </p>
                            </div>
                        </div>
                        
                        {/* 持证专业电工卡片 */}
                        <div className="text-center bg-white dark:bg-gray-900 rounded-xl p-6 xs:p-8 sm:p-8 desktop:p-6 desktop-2k:p-8 desktop-4k:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-hover animate-fade-in-delay-3">
                            <div className="flex flex-col items-center h-full">
                                <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-20 sm:h-20 desktop:w-16 desktop:h-16 desktop-2k:w-20 desktop-2k:h-20 desktop-4k:w-24 desktop-4k:h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4 sm:mb-4 desktop:mb-3 desktop-2k:mb-4 desktop-4k:mb-6 animate-pulse-slow">
                                    <span className="text-2xl xs:text-3xl sm:text-3xl desktop:text-2xl desktop-2k:text-3xl desktop-4k:text-4xl">👨‍🔧</span>
                                </div>
                                <h3 className="font-heading text-base xs:text-lg sm:text-lg desktop:text-base desktop-2k:text-lg desktop-4k:text-xl font-semibold text-brand-700 dark:text-white mb-2 desktop:mb-2 desktop-2k:mb-3 desktop-4k:mb-4">
                                    {locale === 'zh' ? '持证专业电工' : 'Licensed Professionals'}
                                </h3>
                                <p className="font-sans text-xs xs:text-sm sm:text-sm desktop:text-xs desktop-2k:text-sm desktop-4k:text-base text-text-secondary dark:text-gray-400 leading-relaxed text-center flex-1">
                                    {locale === 'zh' ? '所有电工都持有新西兰官方执照' : 'All electricians officially licensed in New Zealand'}
                                </p>
                            </div>
                        </div>
                        
                        {/* 质量保证卡片 */}
                        <div className="text-center bg-white dark:bg-gray-900 rounded-xl p-6 xs:p-8 sm:p-8 desktop:p-6 desktop-2k:p-8 desktop-4k:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-hover animate-fade-in-delay-4">
                            <div className="flex flex-col items-center h-full">
                                <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-20 sm:h-20 desktop:w-16 desktop:h-16 desktop-2k:w-20 desktop-2k:h-20 desktop-4k:w-24 desktop-4k:h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4 sm:mb-4 desktop:mb-3 desktop-2k:mb-4 desktop-4k:mb-6 animate-pulse-slow">
                                    <span className="text-2xl xs:text-3xl sm:text-3xl desktop:text-2xl desktop-2k:text-3xl desktop-4k:text-4xl">🛡️</span>
                                </div>
                                <h3 className="font-heading text-base xs:text-lg sm:text-lg desktop:text-base desktop-2k:text-lg desktop-4k:text-xl font-semibold text-brand-700 dark:text-white mb-2 desktop:mb-2 desktop-2k:mb-3 desktop-4k:mb-4">
                                    {locale === 'zh' ? '质量保证' : 'Quality Guaranteed'}
                                </h3>
                                <p className="font-sans text-xs xs:text-sm sm:text-sm desktop:text-xs desktop-2k:text-sm desktop-4k:text-base text-text-secondary dark:text-gray-400 leading-relaxed text-center flex-1">
                                    {locale === 'zh' ? '所有工作都提供质量保证' : 'All work comes with quality guarantee'}
                                </p>
                            </div>
                        </div>
                        
                        {/* 及时响应卡片 */}
                        <div className="text-center bg-white dark:bg-gray-900 rounded-xl p-6 xs:p-8 sm:p-8 desktop:p-6 desktop-2k:p-8 desktop-4k:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 card-hover animate-fade-in-delay-5">
                            <div className="flex flex-col items-center h-full">
                                <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-20 sm:h-20 desktop:w-16 desktop:h-16 desktop-2k:w-20 desktop-2k:h-20 desktop-4k:w-24 desktop-4k:h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4 sm:mb-4 desktop:mb-3 desktop-2k:mb-4 desktop-4k:mb-6 animate-pulse-slow">
                                    <span className="text-2xl xs:text-3xl sm:text-3xl desktop:text-2xl desktop-2k:text-3xl desktop-4k:text-4xl">⚡</span>
                                </div>
                                <h3 className="font-heading text-base xs:text-lg sm:text-lg desktop:text-base desktop-2k:text-lg desktop-4k:text-xl font-semibold text-brand-700 dark:text-white mb-2 desktop:mb-2 desktop-2k:mb-3 desktop-4k:mb-4">
                                    {locale === 'zh' ? '及时响应' : 'Prompt Service'}
                                </h3>
                                <p className="font-sans text-xs xs:text-sm sm:text-sm desktop:text-xs desktop-2k:text-sm desktop-4k:text-base text-text-secondary dark:text-gray-400 leading-relaxed text-center flex-1">
                                    {locale === 'zh' ? '快速响应客户需求' : 'Quick response to customer needs'}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* 底部CTA */}
                    <div className="mt-12 xs:mt-16 sm:mt-16 desktop-2k:mt-20 desktop-4k:mt-24 text-center animate-fade-in-delay-3">
                        <p className="font-sans text-base xs:text-lg sm:text-lg desktop:text-xl desktop-2k:text-2xl desktop-4k:text-3xl text-text-primary dark:text-gray-300 mb-6 xs:mb-8 sm:mb-8 desktop:mb-10 desktop-2k:mb-12 desktop-4k:mb-16">
                            {locale === 'zh' 
                                ? '准备体验我们的专业服务了吗？' 
                                : 'Ready to experience our professional service?'
                            }
                        </p>
                        <button 
                            onClick={() => onNavClick && onNavClick('contact')}
                            className="font-sans bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 xs:py-4 sm:py-4 desktop:py-5 desktop-2k:py-6 desktop-4k:py-8 px-8 xs:px-10 sm:px-10 desktop:px-12 desktop-2k:px-16 desktop-4k:px-20 rounded-xl transition-all duration-300 text-base xs:text-lg sm:text-lg desktop:text-xl desktop-2k:text-2xl desktop-4k:text-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 tracking-wide button-glow"
                        >
                            {locale === 'zh' ? '立即联系我们' : 'Contact Us Now'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
