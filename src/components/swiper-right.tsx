"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "./swiper.css";
import { Col, Row } from "antd";

SwiperCore.use([Autoplay]);

export default function SwiperRight() {
    return (
        <Swiper
            className={"bg-black"}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
            }}
            speed={3000}
            loop={true}
            slidesPerView={1}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
                1536: {
                    slidesPerView: 4,
                    spaceBetween: 60,
                },
            }}
        >
            <Row gutter={[16, 16]}>
                <Col xs={8} sm={24} md={12} lg={12} xl={12}>
                    <SwiperSlide className={'hover:scale-110'}>
                        <div className="object-cover rounded-2xl overflow-hidden flex justify-center items-center p-5">
                            <img
                                className={
                                    "max-w-[100%] h-[90px] rounded bg-center bg-cover object-cover"
                                }
                                src="/picture-7.png"
                                alt="Image 1"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'hover:scale-110'}>
                        <div className="object-cover rounded-2xl overflow-hidden flex justify-center items-center p-5">
                            <img
                                className={
                                    "max-w-[100%] h-[90px] rounded bg-center bg-cover object-cover"
                                }
                                src="/picture-8.png"
                                alt="Image 1"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'hover:scale-110'}>
                        <div className="object-cover rounded-2xl overflow-hidden flex justify-center items-center p-5">
                            <img
                                className={
                                    "max-w-[100%] h-[90px] rounded bg-center bg-cover object-cover"
                                }
                                src="/picture-9.png"
                                alt="Image 1"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'hover:scale-110'}>
                        <div className="object-cover rounded-2xl overflow-hidden flex justify-center items-center p-5">
                            <img
                                className={
                                    "max-w-[100%] h-[90px] rounded bg-center bg-cover object-cover"
                                }
                                src="/picture-10.png"
                                alt="Image 1"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'hover:scale-110'}>
                        <div className="object-cover rounded-2xl overflow-hidden flex justify-center items-center p-5">
                            <img
                                className={
                                    "max-w-[100%] h-[90px] rounded bg-center bg-cover object-cover"
                                }
                                src="/picture-11.png"
                                alt="Image 1"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'hover:scale-110'}>
                        <div className="object-cover rounded-2xl overflow-hidden flex justify-center items-center p-5">
                            <img
                                className={
                                    "max-w-[100%] h-[90px] rounded bg-center bg-cover object-cover"
                                }
                                src="/picture-1.png"
                                alt="Image 1"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'hover:scale-110'}>
                        <div className="object-cover rounded-2xl overflow-hidden flex justify-center items-center p-5">
                            <img
                                className={
                                    "max-w-[100%] h-[90px] rounded bg-center bg-cover object-cover"
                                }
                                src="/picture-2.png"
                                alt="Image 1"
                            />
                        </div>
                    </SwiperSlide>
                    {/*<SwiperSlide className={'hover:scale-110'}>*/}
                    {/*    <div className="object-cover rounded-2xl overflow-hidden flex justify-center items-center p-5">*/}
                    {/*        <img*/}
                    {/*            className={*/}
                    {/*                "w-[100%] h-[200px] rounded-2xl bg-center bg-cover object-cover"*/}
                    {/*            }*/}
                    {/*            src="/picture-9.png"*/}
                    {/*            alt="Image 1"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</SwiperSlide>*/}
                    {/*<SwiperSlide className={'hover:scale-110'}>*/}
                    {/*    <div className="object-cover rounded-2xl overflow-hidden flex justify-center items-center p-5">*/}
                    {/*        <img*/}
                    {/*            className={*/}
                    {/*                "w-[100%] h-[200px] rounded-2xl bg-center bg-cover object-cover"*/}
                    {/*            }*/}
                    {/*            src="/picture-10.png"*/}
                    {/*            alt="Image 1"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</SwiperSlide>*/}
                    {/*<SwiperSlide className={'hover:scale-110'}>*/}
                    {/*    <div className="object-cover rounded-2xl overflow-hidden flex justify-center items-center p-5">*/}
                    {/*        <img*/}
                    {/*            className={*/}
                    {/*                "w-[100%] h-[200px] rounded-2xl bg-center bg-cover object-cover"*/}
                    {/*            }*/}
                    {/*            src="/picture-11.jpg"*/}
                    {/*            alt="Image 1"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</SwiperSlide>*/}
                    {/*<SwiperSlide className={'hover:scale-110'}>*/}
                    {/*    <div className="object-cover rounded-2xl overflow-hidden flex justify-center items-center p-5">*/}
                    {/*        <img*/}
                    {/*            className={*/}
                    {/*                "w-[100%] h-[200px] rounded-2xl bg-center bg-cover object-cover"*/}
                    {/*            }*/}
                    {/*            src="/picture-12.png"*/}
                    {/*            alt="Image 1"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</SwiperSlide>*/}
                    {/*<SwiperSlide className={'hover:scale-110'}>*/}
                    {/*    <div className="object-cover rounded-2xl overflow-hidden flex justify-center items-center p-5">*/}
                    {/*        <img*/}
                    {/*            className={*/}
                    {/*                "w-[100%] h-[200px] rounded-2xl bg-center bg-cover object-cover"*/}
                    {/*            }*/}
                    {/*            src="/picture-13.png"*/}
                    {/*            alt="Image 1"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</SwiperSlide>*/}
                    {/*<SwiperSlide className={'hover:scale-110'}>*/}
                    {/*    <div className="object-cover rounded-2xl overflow-hidden flex justify-center items-center p-5">*/}
                    {/*        <img*/}
                    {/*            className={*/}
                    {/*                "w-[100%] h-[200px] rounded-2xl bg-center bg-cover object-cover"*/}
                    {/*            }*/}
                    {/*            src="/picture-14.jpg"*/}
                    {/*            alt="Image 1"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</SwiperSlide>*/}
                    {/*<SwiperSlide className={'hover:scale-110'}>*/}
                    {/*    <div className="object-cover rounded-2xl overflow-hidden flex justify-center items-center p-5">*/}
                    {/*        <img*/}
                    {/*            className={*/}
                    {/*                "w-[100%] h-[200px] rounded-2xl bg-center bg-cover object-cover"*/}
                    {/*            }*/}
                    {/*            src="/picture-15.png"*/}
                    {/*            alt="Image 1"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</SwiperSlide>*/}
                    {/*<SwiperSlide className={'hover:scale-110'}>*/}
                    {/*    <div className="object-cover rounded-2xl overflow-hidden flex justify-center items-center p-5">*/}
                    {/*        <img*/}
                    {/*            className={*/}
                    {/*                "w-[100%] h-[200px] rounded-2xl bg-center bg-cover object-cover"*/}
                    {/*            }*/}
                    {/*            src="/picture-16.PNG"*/}
                    {/*            alt="Image 1"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</SwiperSlide>*/}
                </Col>
            </Row>
        </Swiper>
    );
}
