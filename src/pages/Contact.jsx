import { useI18n } from '../hooks/useI18n';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import L from 'leaflet';

// 修复leaflet图标问题
const FixLeafletIcons = () => {
    useEffect(() => {
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });
    }, []);
    return null;
};

export default function Contact({ data }) {
    const { locale } = useI18n();

    return (
        <div className="min-h-screen bg-brand-50 dark:bg-gray-800 pt-24 pb-16">
            <FixLeafletIcons />
            <div className="container mx-auto px-4 max-w-7xl desktop-2k:max-w-8xl desktop-4k:max-w-9xl">
                {/* 页面标题 */}
                <div className="text-center mb-12 xs:mb-16 sm:mb-16 desktop-2k:mb-20 desktop-4k:mb-24 mt-6 xs:mt-8 sm:mt-8">
                    <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl desktop:text-6xl desktop-2k:text-7xl desktop-4k:text-8xl font-bold text-brand-700 dark:text-white mb-4 xs:mb-6 sm:mb-6 tracking-wide animate-fade-in">
                        {locale === 'zh' ? '联系我们' : 'Contact Us'}
                    </h2>
                    <p className="font-sans text-sm xs:text-base sm:text-lg md:text-xl desktop:text-2xl desktop-2k:text-3xl desktop-4k:text-4xl text-text-primary dark:text-gray-300 max-w-2xl tablet:max-w-3xl desktop:max-w-5xl desktop-2k:max-w-6xl desktop-4k:max-w-7xl mx-auto leading-relaxed animate-fade-in-delay-1">
                        {locale === 'zh' 
                            ? '准备好为您的项目提供专业的电气和暖通空调服务' 
                            : 'Ready to provide professional electrical and HVAC services for your project'
                        }
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 desktop:gap-16 desktop-2k:gap-20 desktop-4k:gap-24 items-start">
                    {/* 联系信息 */}
                    <div className="space-y-8 xs:space-y-10 sm:space-y-12 desktop:space-y-16 desktop-2k:space-y-20 desktop-4k:space-y-24 h-auto flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl xs:text-2xl sm:text-2xl desktop:text-3xl desktop-2k:text-4xl desktop-4k:text-5xl font-bold text-brand-700 dark:text-white mb-6 xs:mb-8 sm:mb-8 desktop:mb-10 desktop-2k:mb-12 desktop-4k:mb-16">
                                {locale === 'zh' ? '联系方式' : 'Get in Touch'}
                            </h3>
                            
                            {/* 电话 */}
                            <div className="flex items-start space-x-3 xs:space-x-4 sm:space-x-4 desktop:space-x-6 desktop-2k:space-x-8 desktop-4k:space-x-10 mb-8 xs:mb-10 sm:mb-10 desktop:mb-12 desktop-2k:mb-16 desktop-4k:mb-20">
                                <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-12 sm:h-12 desktop:w-16 desktop:h-16 desktop-2k:w-20 desktop-2k:h-20 desktop-4k:w-24 desktop-4k:h-24 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-6 sm:h-6 desktop:w-8 desktop:h-8 desktop-2k:w-10 desktop-2k:h-10 desktop-4k:w-12 desktop-4k:h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-base xs:text-lg sm:text-lg desktop:text-xl desktop-2k:text-2xl desktop-4k:text-3xl text-brand-700 dark:text-white mb-2">
                                        {locale === 'zh' ? '电话咨询' : 'Phone'}
                                    </h4>
                                    <a 
                                        href="tel:021024681460" 
                                        className="text-blue-600 dark:text-blue-400 hover:underline text-base xs:text-lg sm:text-lg desktop:text-xl desktop-2k:text-2xl desktop-4k:text-3xl font-georgia tracking-wider"
                                    >
                                        021 024 68146
                                    </a>
                                    <p className="text-text-secondary dark:text-gray-400 text-xs xs:text-sm sm:text-sm desktop:text-base desktop-2k:text-lg desktop-4k:text-xl mt-2">
                                        {locale === 'zh' ? '免费报价，随时致电' : 'Call for free quote'}
                                    </p>
                                </div>
                            </div>

                            {/* 服务区域 */}
                            <div className="flex items-start space-x-3 xs:space-x-4 sm:space-x-4 desktop:space-x-6 desktop-2k:space-x-8 desktop-4k:space-x-10 mb-8 xs:mb-10 sm:mb-10 desktop:mb-12 desktop-2k:mb-16 desktop-4k:mb-20">
                                <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-12 sm:h-12 desktop:w-16 desktop:h-16 desktop-2k:w-20 desktop-2k:h-20 desktop-4k:w-24 desktop-4k:h-24 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-6 sm:h-6 desktop:w-8 desktop:h-8 desktop-2k:w-10 desktop-2k:h-10 desktop-4k:w-12 desktop-4k:h-12 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-base xs:text-lg sm:text-lg desktop:text-xl desktop-2k:text-2xl desktop-4k:text-3xl text-brand-700 dark:text-white mb-2">
                                        {locale === 'zh' ? '服务区域' : 'Service Area'}
                                    </h4>
                                    <p className="text-text-secondary dark:text-gray-400 text-xs xs:text-sm sm:text-sm desktop:text-base desktop-2k:text-lg desktop-4k:text-xl">
                                        {locale === 'zh' 
                                            ? '惠灵顿及周边地区' 
                                            : 'Wellington and surrounding areas'
                                        }
                                    </p>
                                </div>
                            </div>

                            {/* 工作时间 */}
                            <div className="flex items-start space-x-3 xs:space-x-4 sm:space-x-4 desktop:space-x-6 desktop-2k:space-x-8 desktop-4k:space-x-10">
                                <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-12 sm:h-12 desktop:w-16 desktop:h-16 desktop-2k:w-20 desktop-2k:h-20 desktop-4k:w-24 desktop-4k:h-24 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-6 sm:h-6 desktop:w-8 desktop:h-8 desktop-2k:w-10 desktop-2k:h-10 desktop-4k:w-12 desktop-4k:h-12 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-base xs:text-lg sm:text-lg desktop:text-xl desktop-2k:text-2xl desktop-4k:text-3xl text-brand-700 dark:text-white mb-2">
                                        {locale === 'zh' ? '工作时间' : 'Working Hours'}
                                    </h4>
                                    <p className="text-text-secondary dark:text-gray-400 leading-relaxed font-georgia text-xs xs:text-sm sm:text-sm desktop:text-base desktop-2k:text-lg desktop-4k:text-xl">
                                        {locale === 'zh' 
                                            ? '周一至周五: 8:00 - 17:00\n周末: 预约服务' 
                                            : 'Mon - Fri: 8:00 AM - 5:00 PM\nWeekends: By appointment'
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 地图区域 */}
                    <div>
                        <h3 className="text-xl xs:text-2xl sm:text-2xl desktop:text-3xl desktop-2k:text-4xl desktop-4k:text-5xl font-bold text-brand-700 dark:text-white mb-4 xs:mb-6 sm:mb-6 desktop:mb-8 desktop-2k:mb-10 desktop-4k:mb-12">
                            {locale === 'zh' ? '服务位置' : 'Service Location'}
                        </h3>
                        <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                            {data && data.mapCenter ? (
                                <MapContainer
                                    center={data.mapCenter}
                                    zoom={data.mapZoom || 13}
                                    style={{ 
                                        height: window.innerWidth >= 2560 ? '600px' : 
                                               window.innerWidth >= 1920 ? '500px' : 
                                               window.innerWidth >= 1440 ? '450px' : '400px',
                                        width: '100%' 
                                    }}
                                    className="rounded-lg"
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={data.mapCenter}>
                                        <Popup>
                                            <div className="text-center leading-relaxed text-xl">
                                                <strong>Octopus Electrical & HVAC</strong><br />
                                                {locale === 'zh' ? '服务区域' : 'Service Area'}<br />
                                                <span className="font-georgia">📞 021 024 68146</span>
                                            </div>
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            ) : (
                                <div className="h-80 xs:h-96 sm:h-96 desktop:h-112 desktop-2k:h-128 desktop-4k:h-144 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-12 h-12 xs:w-16 xs:h-16 sm:w-16 sm:h-16 desktop:w-20 desktop:h-20 desktop-2k:w-24 desktop-2k:h-24 desktop-4k:w-28 desktop-4k:h-28 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4 sm:mb-4 desktop:mb-6 desktop-2k:mb-8 desktop-4k:mb-10">
                                            <svg className="w-6 h-6 xs:w-8 xs:h-8 sm:w-8 sm:h-8 desktop:w-10 desktop:h-10 desktop-2k:w-12 desktop-2k:h-12 desktop-4k:w-14 desktop-4k:h-14 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-text-secondary dark:text-gray-400 text-sm xs:text-base sm:text-base desktop:text-lg desktop-2k:text-xl desktop-4k:text-2xl">
                                            {locale === 'zh' ? '地图加载中...' : 'Loading map...'}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
