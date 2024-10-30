import React from 'react';

const Service: React.FC = () => {
    return (
        <div id={'service'} className="bg-black pt-40">
            <div data-aos={'zoom-out'} className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white">
                    Bizning <span className="text-blue-500">Xizmatlarimiz</span>
                </h2>
                <p className="text-white mt-4">
                    Biz sizning biznesingiz uchun mukammal IT yechimlarni taqdim etamiz
                </p>
            </div>

            <div data-aos={'zoom-in'} className="py-8 px-24 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center">
                    <img src="/img-1.png" alt="Store Hours and Vacation" className="mx-auto mb-6"/>
                    <h3 className="mb-2">Do'kon soatlari va dam olish</h3>
                    <p className="text-gray-500">Mavsumiy yoki belgilangan soatlar oralig'ida ishlaydigan korxonalar uchun ideal.</p>
                </div>

                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center">
                    <img src="/img-2.png" alt="Coupon Management" className="mx-auto mb-6"/>
                    <h3 className="mb-2">Kupon boshqaruvi</h3>
                    <p className="text-gray-500">Moslashuvchan chegirma promosi bilan qaytarib bo'lmaydigan bitimlar va takliflarni o'rnating
                        kodlari.</p>
                </div>

                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center">
                    <img src="/img-3.png" alt="Product Import and Export" className="mx-auto mb-6"/>
                    <h3 className="mb-2">Mahsulot importi va eksporti</h3>
                    <p className="text-gray-500">Mahsulotlarni sotuvchidan import qiling va mahsulotlarni CSV ga eksport qiling
                        asboblar paneli.</p>
                </div>

                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center">
                    <img src="/img-4.png" alt="Inquiry and Support Ticket System" className="mx-auto mb-6"/>
                    <h3 className="mb-2">So'rov va qo'llab-quvvatlash chipta tizimi</h3>
                    <p className="text-gray-500">Sotuvchilar bilan o'zaro munosabatlar xaridorlarga yaxshiroq xarid qilishga yordam beradi
                        qarorlar.</p>
                </div>

                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center">
                    <img src="/img-5.png" alt="Membership Subscription" className="mx-auto mb-6"/>
                    <h3 className="mb-2">A'zolik obunasi</h3>
                    <p className="text-gray-500">Sotuvchilar uchun bepul va pullik aʼzolik rejalarini taklif qiling. Takroriylikni qabul qiling
                        to'lovlar.</p>
                </div>

                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center">
                    <img src="/img-6.png" alt="Invoice and Shipping Labels" className="mx-auto mb-6"/>
                    <h3 className="mb-2">Hisob-faktura va yuk yorliqlari</h3>
                    <p className="text-gray-500">Buyurtmani bajarish do'kon fakturalari va jo'natish bilan osonlashtirildi
                        teglar.</p>
                </div>

                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center">
                    <img src="/img-7.png" alt="GEO Location and Radius Search" className="mx-auto mb-6"/>
                    <h3 className="mb-2">GEO joylashuvi va radius qidiruvi</h3>
                    <p className="text-gray-500">Foydalanuvchi joriy yaqinidagi mahsulot yoki xizmatlarni qidirishga ruxsat bering
                        joylashuvi.</p>
                </div>

                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center">
                    <img src="/img-8.png" alt="Shipment and Delivery" className="mx-auto mb-6"/>
                    <h3 className="mb-2">Yuk tashish va yetkazib berish</h3>
                    <p className="text-gray-500">Yetkazib berishni kuzatishni baham ko'ring, yuk holati o'zgarganda xabar bering.</p>
                </div>
            </div>
        </div>
    );
};

export default Service;
