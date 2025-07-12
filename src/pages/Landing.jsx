import { useI18n } from '../hooks/useI18n';

export default function Landing({ data }) {
    const { locale } = useI18n();

    if (!data) return null;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center max-w-4xl mx-auto">
                    {/* 主标题 */}
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        {data.heading[locale]}
                    </h1>
                    
                    {/* 副标题 */}
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        {data.subheading[locale]}
                    </p>
                    
                    {/* CTA 按钮 */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a 
                            href="#contact" 
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
                        >
                            {data.cta[locale]}
                        </a>
                        <a 
                            href="tel:021024681460" 
                            className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
                        >
                            📞 021 024 68146
                        </a>
                    </div>
                    
                    {/* 服务亮点 */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                ⚡
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {locale === 'zh' ? '专业电气' : 'Professional Electrical'}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {locale === 'zh' ? '住宅和商业电气解决方案' : 'Residential & Commercial Solutions'}
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                🏠
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {locale === 'zh' ? '暖通空调' : 'HVAC Systems'}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {locale === 'zh' ? '舒适的室内环境控制' : 'Comfort Climate Control'}
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                🔌
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {locale === 'zh' ? '电动汽车充电' : 'EV Charging'}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {locale === 'zh' ? '未来出行充电解决方案' : 'Future-Ready Charging Solutions'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
