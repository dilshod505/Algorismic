import {defaultPadding} from "../../variables.ts";
import {Col, Row} from "antd";
import {FaPhone} from "react-icons/fa";
import {useEffect} from "react";
import * as Aos from "aos";

const phoneBtn = () => {
    window.location.href = 'tel:+998900000000';
}

function MainSection() {
    useEffect(() => {
        Aos.init({ duration: 1000 }); // Animatsiya davomiyligi 1000 ms
    }, []);


    return (
        <div id={'about'}
            className={`${defaultPadding} bg-black text-white min-h-[50vh] flex items-center justify-center mx-auto pt-28`}>
            <div className={'px-5 md:px-10 lg:px-20 flex items-center justify-center'}>
                <Row gutter={[16, 16]} align="middle">
                    <Col xs={24} md={12}>
                        <div data-aos="fade-right" className={'max-w-[600px] mt-24 mb-24'}>
                            <h1 className={'text-4xl font-bold mb-5'}>Algorismic Tech natijaga yo'naltirilgan raqamli
                                marketing xizmatlarini taklif qiladi.</h1>
                            <span>Algorismic Tech-da biz kompaniyalarga raqamli marketing muammolarini yengishda yordam berishda ko'p yillik tajribaga egamiz. Biz brendingiz uchun muhim bo'lgan ko'rsatkichlar ustida ishlaymiz. Bizning tajribamiz, bilimimiz va konversiyaga yo'naltirilgan yondashuvimiz bizni sizning eng yaxshi raqamli marketing agentligingizga aylantiradi. To'liq xizmat ko'rsatadigan raqamli marketing kompaniyasi sifatida biz har doim mijozimizning muvaffaqiyatiga sodiqmiz. Biz kompaniyalarga yakuniy o'sishni ta'minlaymiz va ularga maxsus kampaniyalarimiz bilan yangi maqsadli bozorlarni kengaytirishga yordam beramiz. Bizga ajoyib veb-tajriba yarataylik va veb-saytlarni ishlab chiqish xizmatlarimiz bilan biznesingiz uchun hamkorlikni yarataylik.</span>
                            <br/>
                            <br/>
                            <button type={'submit'}
                                    className={'bg-green-600 px-10 py-2 rounded-full font-bold flex items-center gap-3'}
                                    onClick={phoneBtn}><FaPhone/> Bog'lanish
                            </button>
                        </div>
                    </Col>
                    <Col xs={24} md={12}>
                        <div data-aos={'fade-left'} className={'max-w-[1800px]'}>
                            <img src="/it.png" alt="" width={500} height={500}/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default MainSection;