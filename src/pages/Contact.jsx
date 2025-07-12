import { useI18n } from '../hooks/useI18n';

export default function Contact({ data }) {
    const { locale } = useI18n();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-16">
            <div className="container mx-auto px-4">
                {/* 页面标题 */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        {locale === 'zh' ? '联系我们' : 'Contact Us'}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {locale === 'zh' 
                            ? '准备好为您的项目提供专业的电气和暖通空调服务' 
                            : 'Ready to provide professional electrical and HVAC services for your project'
                        }
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* 联系信息 */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                {locale === 'zh' ? '联系方式' : 'Get in Touch'}
                            </h3>
                            
                            {/* 电话 */}
                            <div className="flex items-start space-x-4 mb-6">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        {locale === 'zh' ? '电话咨询' : 'Phone'}
                                    </h4>
                                    <a 
                                        href="tel:021024681460" 
                                        className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
                                    >
                                        021 024 68146
                                    </a>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                                        {locale === 'zh' ? '免费报价，随时致电' : 'Call for free quote'}
                                    </p>
                                </div>
                            </div>

                            {/* 服务区域 */}
                            <div className="flex items-start space-x-4 mb-6">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        {locale === 'zh' ? '服务区域' : 'Service Area'}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {locale === 'zh' 
                                            ? '基督城及周边地区' 
                                            : 'Christchurch and surrounding areas'
                                        }
                                    </p>
                                </div>
                            </div>

                            {/* 工作时间 */}
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        {locale === 'zh' ? '工作时间' : 'Working Hours'}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {locale === 'zh' 
                                            ? '周一至周五: 8:00 - 17:00\n周末: 预约服务' 
                                            : 'Mon - Fri: 8:00 AM - 5:00 PM\nWeekends: By appointment'
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 服务承诺 */}
                        <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                                {locale === 'zh' ? '我们的承诺' : 'Our Promise'}
                            </h4>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {locale === 'zh' ? '免费现场评估和报价' : 'Free on-site assessment and quote'}
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {locale === 'zh' ? '持证专业电工' : 'Licensed professional electricians'}
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {locale === 'zh' ? '工作质量保证' : 'Quality workmanship guaranteed'}
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {locale === 'zh' ? '及时响应服务' : 'Prompt and reliable service'}
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 地图区域 */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            {locale === 'zh' ? '服务位置' : 'Service Location'}
                        </h3>
                        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 h-96 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {locale === 'zh' 
                                        ? '交互式地图即将上线' 
                                        : 'Interactive map coming soon'
                                    }
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {locale === 'zh' 
                                        ? '目前我们主要服务基督城及周边地区' 
                                        : 'Currently serving Christchurch and surrounding areas'
                                    }
                                    <br />
                                    {data && data.mapCenter && (
                                        `Coordinates: ${data.mapCenter[0]}, ${data.mapCenter[1]}`
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA 区域 */}
                <div className="text-center mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {locale === 'zh' ? '准备开始您的项目？' : 'Ready to Start Your Project?'}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                        {locale === 'zh' 
                            ? '联系我们获取免费评估和专业建议。我们的团队随时准备为您提供最优质的电气和暖通空调服务。' 
                            : 'Contact us for a free assessment and professional advice. Our team is ready to provide you with the highest quality electrical and HVAC services.'
                        }
                    </p>
                    <a 
                        href="tel:021024681460" 
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg inline-block"
                    >
                        📞 {locale === 'zh' ? '立即致电' : 'Call Now'} - 021 024 68146
                    </a>
                </div>
            </div>
        </div>
    );
}
