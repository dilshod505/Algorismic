import React from 'react';

const News: React.FC = () => {
    return (
        <div id={'news'} className="flex flex-col lg:flex-row gap-8 p-6 bg-black text-white px-24">
            {/* Left Section */}
            <div  data-aos={'zoom-in-left'} className="lg:w-1/2 w-full">
                <h2 className="text-4xl mb-6">Yangiliklar</h2>
                <div className="space-y-6">
                    <div className="flex justify-between items-center border-b pb-4">
                        <p className="text-white">Bu IT xizmatlari, konsalting va biznes yechimlari bo'yicha tashkilot bo'lib, u dunyodagi ko'plab yirik biznes bilan hamkorlik qiladi...</p>
                    </div>
                    <div className="flex justify-between items-center border-b pb-4">
                        <p className="text-white">Bu IT xizmatlari, konsalting va biznes yechimlari boʻyicha hamkorlik qiluvchi tashkilot...</p>
                    </div>
                    <div className="flex justify-between items-center border-b pb-4">
                        <p className="text-white">Bu IT xizmatlari, konsalting va biznes yechimlari bo'yicha tashkilot bo'lib, u dunyodagi ko'plab yirik biznes bilan hamkorlik qiladi...</p>
                    </div>
                    <div className="border-b pb-4">
                        <p className="text-white">Bugun ishga tushirildi: Biz korxonalarga raqamli transformatsiyani muvaffaqiyatli boshqarishda va real o'sishni ta'minlashda yordam beramiz...</p>
                    </div>
                </div>
            </div>

            <div  data-aos={'zoom-in-right'} className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                    <img className="w-full h-48 object-cover rounded-lg" src="/part-1.png" alt="News 1" />
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3>Keyingi yangi texnologiyami? Siz uni yutib yuborishingiz mumkin</h3>
                        <p>January 12, 2023</p>
                    </div>
                </div>
                <div className="relative">
                    <img className="w-full h-48 object-cover rounded-lg" src="/part-2.png" alt="News 2" />
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3>Keyingi yangi texnologiyami? Siz uni yutib yuborishingiz mumkin</h3>
                        <p>January 12, 2023</p>
                    </div>
                </div>
                <div className="relative">
                    <img className="w-full h-48 object-cover rounded-lg" src="/part-3.png" alt="News 3" />
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3>Keyingi yangi texnologiyami? Siz uni yutib yuborishingiz mumkin</h3>
                        <p>January 12, 2023</p>
                    </div>
                </div>
                <div className="relative">
                    <img className="w-full h-48 object-cover rounded-lg" src="/part-4.png" alt="News 4" />
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3>Keyingi yangi texnologiyami? Siz uni yutib yuborishingiz mumkin</h3>
                        <p>January 12, 2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
