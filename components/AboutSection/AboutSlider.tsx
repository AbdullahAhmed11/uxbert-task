import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';






function AboutSlider() {

    const SLIDER_PROPS = [
        {
            imgUrl: "./images/slider.jpg",
            name: "Sharon Stone",
            title: "Acc- Hollywood",
            subTitle: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat orci sed nibh ultricies, eget sollicitudin quam consectetur.Donec at mattis purus, ut accumsan nisl. Lorem ipsum dolor sit amet”"
        },
        {
            imgUrl: "./images/slidertwo.jpg",
            name: "Sharon Stone",
            title: "Acc- Hollywood",
            subTitle: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat orci sed nibh ultricies, eget sollicitudin quam consectetur.Donec at mattis purus, ut accumsan nisl. Lorem ipsum dolor sit amet”"
        },
        {
            imgUrl: "./images/sliderthree.jpg",
            name: "Sharon Stone",
            title: "Acc- Hollywood",
            subTitle: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat orci sed nibh ultricies, eget sollicitudin quam consectetur.Donec at mattis purus, ut accumsan nisl. Lorem ipsum dolor sit amet”"
        },
    ]

    return (
        <>
            <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
                {
                    SLIDER_PROPS.map(item => (
                        <SwiperSlide key={item.name}>
                            <div className="flex items-center flex-col gap-1 mt-10 text-center">
                                <div>
                                    <img src={item.imgUrl} className="w-28 h-28 rounded-full" />
                                </div>
                                <p className="font-bold">Sharon Stone</p>
                                <p className="text-hover-color">Acc- Hollywood</p>
                                <p className="text-second-text mb-10 mr-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat orci sed nibh ultricies, eget sollicitudin quam consectetur.
                                    Donec at mattis purus, ut accumsan nisl. Lorem ipsum dolor sit amet” </p>
                            </div>
                        </SwiperSlide>

                    ))
                }


            </Swiper>
        </>
    )
}
export default AboutSlider;