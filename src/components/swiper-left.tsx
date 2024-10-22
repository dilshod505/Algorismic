"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "./swiper.css";
import { Col, Row } from "antd";

SwiperCore.use([Autoplay]);

export default function SwiperLeft() {
    return (
        <Swiper
            className={"bg-black"}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
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
                                    "max-w-[100%] h-[115px] rounded bg-center bg-cover object-cover"
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
                                    "max-w-[100%] h-[115px] rounded bg-center bg-cover object-cover"
                                }
                                src="/picture-2.png"
                                alt="Image 1"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'hover:scale-110'}>
                        <div className="object-cover rounded-2xl overflow-hidden flex justify-center items-center p-5">
                            <img
                                className={
                                    "max-w-[100%] h-[115px] rounded bg-center bg-cover object-cover"
                                }
                                src="/picture-3.png"
                                alt="Image 1"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'hover:scale-110'}>
                        <div className="object-cover rounded-2xl overflow-hidden flex justify-center items-center p-5">
                            <img
                                className={
                                    "max-w-[100%] h-[115px] rounded bg-center bg-cover object-cover"
                                }
                                src="/picture-4.png"
                                alt="Image 1"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'hover:scale-110'}>
                        <div className="object-cover rounded-2xl overflow-hidden flex justify-center items-center p-5">
                            <img
                                className={
                                    "max-w-[100%] h-[115px] rounded bg-center bg-cover object-cover"
                                }
                                src="/picture-5.png"
                                alt="Image 1"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'hover:scale-110'}>
                        <div className="object-cover rounded-2xl overflow-hidden flex justify-center items-center p-5">
                            <img
                                className={
                                    "max-w-[100%] h-[115px] rounded bg-center bg-cover object-cover"
                                }
                                src="/picture-6.png"
                                alt="Image 1"
                            />
                        </div>
                    </SwiperSlide>
                </Col>
            </Row>
        </Swiper>
    );
}
