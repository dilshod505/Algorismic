import {Row, Col} from "antd";
import {AiOutlineMail} from "react-icons/ai";
import {FaPhone, FaTelegramPlane, FaWhatsapp} from "react-icons/fa";

const ContactSection = () => {

    return (
        <div id="contact" className="py-10 bg-black pt-24">
            <div className="px-5 md:px-10 lg:px-20">
                <h1 className="text-4xl font-bold text-white mb-16" data-aos={'fade-right'}>Контакты</h1>
                <Row gutter={[16, 16]} data-aos={'zoom-in'}>
                    <Col xs={24} md={12} lg={6}>
                        <div className="flex items-center justify-center p-5 bg-white rounded shadow-lg">
                            <FaPhone className="size-7 px-2 bg-blue-500 shadow-xl rounded-full text-white mr-3"/>
                            <div className={'cursor-pointer'}>
                                <a href="#" onClick={() => (window.location.href = "tel:+998 97 888 10 27")}>
                                    <h3 className="text-lg font-bold">Telefon:</h3>
                                    <p className="text-gray-700">+998 97 888 10 27</p>
                                </a>
                            </div>
                        </div>
                    </Col>

                    <Col xs={24} md={12} lg={6}>
                        <div className="flex items-center justify-center p-5 bg-white rounded shadow-lg">
                            <FaWhatsapp className="text-3xl text-green-600 mr-3"/>
                            <div className={'cursor-pointer'}>
                                <a href="#">
                                    <h3 className="text-lg font-bold">WhatsApp:</h3>
                                    <p className="text-gray-700">+998 97 888 10 27</p>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} md={12} lg={6}>
                        <div className="flex items-center justify-center p-5 bg-white rounded shadow-lg">
                            <FaTelegramPlane className="bg-blue-500 text-white px-2 rounded-full size-7 mr-3"/>
                            <div className={'cursor-pointer'}>
                                <a href="https://t.me/AbdulazizOchilov"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    <h3 className="text-lg font-bold">Telegram:</h3>
                                    <p className="text-gray-700">+998 97 888 10 27</p>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} md={12} lg={6}>
                        <div className="flex items-center justify-center p-5 bg-white rounded shadow-lg">
                            <AiOutlineMail className="text-3xl text-blue-600 mr-3"/>
                            <div className={'cursor-pointer'}>
                                <a href="mailto:info@algorismic.uz">
                                    <h3 className="text-lg font-bold">Email:</h3>
                                    <p className="text-gray-700">info@cloud-solutions.uz</p>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ContactSection;
