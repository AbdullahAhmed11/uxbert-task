import React, { useEffect, useState, useRef } from 'react';
import Home1 from "./images/Home1.jpg"
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

function Home() {

    const SLIDER_DATA = [
        {
            imgSrc: "./images/Home3.jpg",
            slideTitle: "slide with the all new chair"
        },
        {
            imgSrc: "./images/Home2.jpg",
            slideTitle: "slide with the all new chair"
        },
        {
            imgSrc: "./images/Home1.jpg",
            slideTitle: "slide with the all new chair"
        },
    ]

    return (
        <>

            <div>
                <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
                    {
                        SLIDER_DATA.map((slide) => (

                            <SwiperSlide>

                                <div className="bg-cover bg-center h-full w-full p-10" style={{ backgroundImage: `url(${slide.imgSrc})` }}>
                                    <div className="flex items-center justify-center flex-col md:pt-40  ">
                                        <div className="md:mr-[48rem] mr-[1rem]  flex flex-col md:mt-40 mt-52">
                                            <h1 className="text-2xl text-white font-bold ">{slide.slideTitle}</h1>
                                            <button className="   bg-white w-[150px] mt-5  h-9 font-bold rounded hover:bg-hover-color hover:text-white">
                                                SHOP NOW
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    )
}
export default Home;