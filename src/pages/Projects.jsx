import { useI18n } from '../hooks/useI18n';

export default function Projects({ data }) {
    const { locale } = useI18n();

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 py-16">
            <div className="container mx-auto px-4">
                {/* 页面标题 */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        {locale === 'zh' ? '我们的项目' : 'Our Projects'}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {locale === 'zh' 
                            ? '查看我们最近完成的电气和暖通空调项目案例' 
                            : 'Showcase of our recent electrical and HVAC project completions'
                        }
                    </p>
                </div>

                {/* 项目内容 */}
                {!data || data.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-12 h-12 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            {locale === 'zh' ? '项目案例即将上线' : 'Project Portfolio Coming Soon'}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                            {locale === 'zh' 
                                ? '我们正在整理最新的项目案例，敬请期待。如需了解我们的工作，请随时联系我们。' 
                                : 'We are currently updating our project portfolio. Please contact us to learn more about our recent work and capabilities.'
                            }
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="#contact" 
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                            >
                                {locale === 'zh' ? '联系我们' : 'Contact Us'}
                            </a>
                            <a 
                                href="#services" 
                                className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                            >
                                {locale === 'zh' ? '查看服务' : 'View Services'}
                            </a>
                        </div>
                    </div>
                ) : (
                    // 如果有项目数据，在这里渲染项目列表
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.map((project, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                                {/* 项目内容将在这里渲染 */}
                            </div>
                        ))}
                    </div>
                )}

                {/* 服务亮点 */}
                <div className="mt-20 bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                        {locale === 'zh' ? '为什么选择我们？' : 'Why Choose Us?'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                {locale === 'zh' ? '专业认证' : 'Certified Professionals'}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {locale === 'zh' ? '持证上岗，专业可靠' : 'Licensed and experienced'}
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                {locale === 'zh' ? '及时响应' : 'Quick Response'}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {locale === 'zh' ? '快速响应，及时服务' : 'Fast and reliable service'}
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                {locale === 'zh' ? '客户满意' : 'Customer Satisfaction'}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {locale === 'zh' ? '一次到位，客户放心' : 'Done once, done right'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
