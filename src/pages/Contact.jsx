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
            <div className="container mx-auto px-4">
                {/* 页面标题 */}
                <div className="text-center mb-16 mt-8">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-700 dark:text-white mb-4 tracking-wide">
                        {locale === 'zh' ? '联系我们' : 'Contact Us'}
                    </h2>
                    <p className="font-sans text-xl text-text-primary dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        {locale === 'zh' 
                            ? '准备好为您的项目提供专业的电气和暖通空调服务' 
                            : 'Ready to provide professional electrical and HVAC services for your project'
                        }
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* 联系信息 */}
                    <div className="space-y-12 h-96 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-brand-700 dark:text-white mb-8">
                                {locale === 'zh' ? '联系方式' : 'Get in Touch'}
                            </h3>
                            
                            {/* 电话 */}
                            <div className="flex items-start space-x-4 mb-10">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-brand-700 dark:text-white mb-2">
                                        {locale === 'zh' ? '电话咨询' : 'Phone'}
                                    </h4>
                                    <a 
                                        href="tel:021024681460" 
                                        className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-georgia tracking-wider"
                                    >
                                        021 024 68146
                                    </a>
                                    <p className="text-text-secondary dark:text-gray-400 text-sm mt-2">
                                        {locale === 'zh' ? '免费报价，随时致电' : 'Call for free quote'}
                                    </p>
                                </div>
                            </div>

                            {/* 服务区域 */}
                            <div className="flex items-start space-x-4 mb-10">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-brand-700 dark:text-white mb-2">
                                        {locale === 'zh' ? '服务区域' : 'Service Area'}
                                    </h4>
                                    <p className="text-text-secondary dark:text-gray-400">
                                        {locale === 'zh' 
                                            ? '惠灵顿及周边地区' 
                                            : 'Wellington and surrounding areas'
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
                                    <h4 className="font-semibold text-brand-700 dark:text-white mb-2">
                                        {locale === 'zh' ? '工作时间' : 'Working Hours'}
                                    </h4>
                                    <p className="text-text-secondary dark:text-gray-400 leading-relaxed font-georgia">
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
                        <h3 className="text-2xl font-bold text-brand-700 dark:text-white mb-6">
                            {locale === 'zh' ? '服务位置' : 'Service Location'}
                        </h3>
                        <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                            {data && data.mapCenter ? (
                                <MapContainer
                                    center={data.mapCenter}
                                    zoom={data.mapZoom || 13}
                                    style={{ height: '400px', width: '100%' }}
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
                                <div className="h-96 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-text-secondary dark:text-gray-400">
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
