import { useI18n } from '../hooks/useI18n';
import { useSearchParams } from 'react-router-dom';
import config from '../assets/config.json';

export default function ServiceDetail() {
    const { locale } = useI18n();
    const [searchParams] = useSearchParams();
    const serviceId = searchParams.get('id');
    
    // 从配置中找到对应的服务
    const service = config.sections.services.find(s => s.id === serviceId);
    
    if (!service) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {locale === 'zh' ? '服务未找到' : 'Service Not Found'}
                    </h1>
                    <a 
                        href="#services" 
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        {locale === 'zh' ? '返回服务页面' : 'Back to Services'}
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-16">
            <div className="container mx-auto px-4">
                {/* 返回按钮 */}
                <div className="mb-8">
                    <button 
                        onClick={() => window.history.back()}
                        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        {locale === 'zh' ? '返回' : 'Back'}
                    </button>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* 服务标题 */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {service.title[locale] || service.title.en}
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            {service.description[locale] || service.description.en}
                        </p>
                    </div>

                    {/* 服务图片 */}
                    <div className="mb-12">
                        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                            <img 
                                src={service.icon} 
                                alt={service.title[locale] || service.title.en}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className="w-full h-full bg-gray-300 dark:bg-gray-600 hidden items-center justify-center text-6xl">
                                {service.id === 'electrical' && '⚡'}
                                {service.id === 'hvac' && '🏠'}
                                {service.id === 'ev' && '🔌'}
                            </div>
                        </div>
                    </div>

                    {/* 详细信息 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                {locale === 'zh' ? '服务详情' : 'Service Details'}
                            </h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-300">
                                {service.id === 'electrical' && (
                                    <>
                                        <p>• {locale === 'zh' ? '住宅和商业电气安装' : 'Residential and commercial electrical installation'}</p>
                                        <p>• {locale === 'zh' ? '配电箱升级和维护' : 'Switchboard upgrades and maintenance'}</p>
                                        <p>• {locale === 'zh' ? '故障排除和紧急维修' : 'Troubleshooting and emergency repairs'}</p>
                                        <p>• {locale === 'zh' ? '照明系统设计和安装' : 'Lighting system design and installation'}</p>
                                        <p>• {locale === 'zh' ? '安全检查和认证' : 'Safety inspections and certifications'}</p>
                                    </>
                                )}
                                {service.id === 'hvac' && (
                                    <>
                                        <p>• {locale === 'zh' ? '中央空调系统安装' : 'Central air conditioning installation'}</p>
                                        <p>• {locale === 'zh' ? '热泵系统维护' : 'Heat pump system maintenance'}</p>
                                        <p>• {locale === 'zh' ? '通风系统设计' : 'Ventilation system design'}</p>
                                        <p>• {locale === 'zh' ? '能效优化咨询' : 'Energy efficiency consultations'}</p>
                                        <p>• {locale === 'zh' ? '定期维护服务' : 'Regular maintenance services'}</p>
                                    </>
                                )}
                                {service.id === 'ev' && (
                                    <>
                                        <p>• {locale === 'zh' ? '家用充电桩安装' : 'Home charging station installation'}</p>
                                        <p>• {locale === 'zh' ? '商用快速充电器' : 'Commercial fast charger setup'}</p>
                                        <p>• {locale === 'zh' ? '电路容量评估' : 'Electrical capacity assessment'}</p>
                                        <p>• {locale === 'zh' ? '智能充电解决方案' : 'Smart charging solutions'}</p>
                                        <p>• {locale === 'zh' ? '维护和支持服务' : 'Maintenance and support services'}</p>
                                    </>
                                )}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                {locale === 'zh' ? '为什么选择我们？' : 'Why Choose Us?'}
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">
                                            {locale === 'zh' ? '专业认证' : 'Licensed Professionals'}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            {locale === 'zh' ? '持证上岗，符合当地法规' : 'Fully licensed and compliant with local regulations'}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">
                                            {locale === 'zh' ? '质量保证' : 'Quality Guarantee'}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            {locale === 'zh' ? '一次到位，提供工作保障' : 'Done once, done right with work warranty'}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">
                                            {locale === 'zh' ? '免费报价' : 'Free Quotes'}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            {locale === 'zh' ? '免费现场评估和详细报价' : 'Free on-site assessment and detailed quotes'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA 区域 */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            {locale === 'zh' ? '需要这项服务？' : 'Need This Service?'}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                            {locale === 'zh' 
                                ? '联系我们获取免费评估和专业建议。我们的团队随时准备为您提供最优质的服务。' 
                                : 'Contact us for a free assessment and professional advice. Our team is ready to provide you with the highest quality service.'
                            }
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="tel:021024681460" 
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                            >
                                📞 {locale === 'zh' ? '立即致电' : 'Call Now'}
                            </a>
                            <a 
                                href="#contact" 
                                className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                            >
                                {locale === 'zh' ? '在线联系' : 'Contact Online'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
