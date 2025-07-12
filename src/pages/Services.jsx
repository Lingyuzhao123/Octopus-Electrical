import { useI18n } from '../hooks/useI18n';

export default function Services({ data }) {
    const { locale } = useI18n();

    if (!data || !Array.isArray(data)) return null;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-16">
            <div className="container mx-auto px-4">
                {/* 页面标题 */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        {locale === 'zh' ? '我们的服务' : 'Our Services'}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {locale === 'zh' 
                            ? '专业、可靠、高质量的电气和暖通空调服务' 
                            : 'Professional, reliable, and high-quality electrical and HVAC services'
                        }
                    </p>
                </div>

                {/* 服务卡片 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((service) => (
                        <div 
                            key={service.id} 
                            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* 服务图片 */}
                            <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                <img 
                                    src={service.icon} 
                                    alt={service.title[locale] || service.title.en}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                {/* fallback图标 */}
                                <div className="w-full h-full bg-gray-300 dark:bg-gray-600 hidden items-center justify-center text-4xl">
                                    {service.id === 'electrical' && '⚡'}
                                    {service.id === 'hvac' && '🏠'}
                                    {service.id === 'ev' && '🔌'}
                                </div>
                            </div>
                            
                            {/* 服务内容 */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {service.title[locale] || service.title.en}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {service.description[locale] || service.description.en}
                                </p>
                                
                                {/* 联系按钮 */}
                                <div className="mt-6">
                                    <a 
                                        href="#contact" 
                                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-200"
                                    >
                                        {locale === 'zh' ? '了解更多' : 'Learn More'}
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 底部 CTA */}
                <div className="text-center mt-16">
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        {locale === 'zh' 
                            ? '需要专业的电气或暖通空调服务？' 
                            : 'Need professional electrical or HVAC services?'
                        }
                    </p>
                    <a 
                        href="#contact" 
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
                    >
                        {locale === 'zh' ? '立即联系我们' : 'Contact Us Today'}
                    </a>
                </div>
            </div>
        </div>
    );
}
