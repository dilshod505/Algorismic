import './App.css'
import 'aos/dist/aos.css';
import MainHeader from "./components/header.tsx";
import {defaultPadding} from "../variables.ts";
import SwiperRight from "./components/swiper-right.tsx";
import SwiperLeft from "./components/swiper-left.tsx";
import {Col, Row} from "antd";
import MainSection from "./components/main-section.tsx";
import News from "./components/news.tsx";
import Service from "./components/service.tsx";
import Contact from "./components/contact.tsx";
import YandexMap from "./components/yandex-map.tsx";
import Footer from "./components/footer.tsx";

function App() {

    return (
        <>
            <div>
                <video
                    autoPlay
                    muted
                    loop
                    id="myVideo"
                    className="absolute w-[100%]  bg-cover bg-center object-cover min-h-[150vh] -z-10"
                >
                    <source src="/bg-video.mp4" type="video/mp4"/>
                </video>
                <div
                    data-aos="fade-right"
                    className={`${defaultPadding} pt-32 text-white w-[100%] min-h-[100vh] flex flex-col justify-center gap-3`}
                >
                    <div className={'flex items-center justify-center gap-28'}>
                        <Row gutter={[16, 16]}>
                            <Col>
                                <div data-aos="zoom-out -up" className={'text-center'}>
                                    <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] font-bold">
                                        Algorismic  IT Company <br/>
                                    </h1>
                                    <p className="text-[14px] max-w-[1080px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]">
                                        Ma'lumotlar va tajriba orqali brendingizni yuksaltirish
                                        Biz brendlarga internetdagi ish faoliyatini optimallashtirishda yordam beramiz.
                                        Raqobatni mag'lub eting va ixtisoslashgan raqamli marketing xizmatlarimiz bilan
                                        maqsadli
                                        bozorlaringizni boshqaring.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <MainHeader/>
            </div>
            <SwiperLeft/>
            <SwiperRight/>
            <MainSection/>
            <News/>
            <Service/>
            <Contact/>
            <YandexMap/>
            <Footer/>
        </>
    )
}

export default App
