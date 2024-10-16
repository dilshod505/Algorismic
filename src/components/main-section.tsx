import {defaultPadding} from "../../variables.ts";
import {Col, Row} from "antd";
import {FaPhone} from "react-icons/fa";

function MainSection() {
    return (
        <div className={`${defaultPadding} bg-black text-white min-h-[50vh] flex items-center justify-center gap-3 pt-28`}>
            <Row gutter={[16, 16]}>
                <Col>
                    <div className={'max-w-[600px] mt-24 mb-24'}>
                        <h1 className={'text-4xl font-bold mb-5'}>Algorismic Tech natijaga yo'naltirilgan raqamli
                            marketing xizmatlarini taklif qiladi.</h1>
                        <span>Algorismic Tech-da biz kompaniyalarga raqamli marketing muammolarini yengishda yordam berishda ko'p yillik tajribaga egamiz. Biz brendingiz uchun muhim bo'lgan ko'rsatkichlar ustida ishlaymiz. Bizning tajribamiz, bilimimiz va konversiyaga yo'naltirilgan yondashuvimiz bizni sizning eng yaxshi raqamli marketing agentligingizga aylantiradi. To'liq xizmat ko'rsatadigan raqamli marketing kompaniyasi sifatida biz har doim mijozimizning muvaffaqiyatiga sodiqmiz. Biz kompaniyalarga yakuniy o'sishni ta'minlaymiz va ularga maxsus kampaniyalarimiz bilan yangi maqsadli bozorlarni kengaytirishga yordam beramiz. Bizga ajoyib veb-tajriba yarataylik va veb-saytlarni ishlab chiqish xizmatlarimiz bilan biznesingiz uchun hamkorlikni yarataylik.</span>
                        <br/>
                        <br/>
                        <button type={'submit'} className={'bg-green-600 px-10 py-2 rounded-full font-bold flex items-center gap-3  '}><FaPhone/> Bog&apos;lanish</button>
                    </div>
                </Col>
                <Col>

                    <div>
                        <img src="/it.png" alt="" width={500} height={500}/>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default MainSection;