import React from 'react'
import 'swiper/css';
import { Navigation,Pagination, Autoplay, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider() {
  return (
    <div className="row rounded overflow-hidden height-500" >
    <Swiper
    modules={[Navigation, Autoplay, Pagination, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}
  >
    <SwiperSlide>
        <img src="../../../../../images/blogimage.jpg" alt="" className='w-100 height-500'/>
    </SwiperSlide>
    <SwiperSlide>
    <img src="../../../../../images/blog2.jpg" alt="" className='w-100 height-500'/>
    </SwiperSlide>
    <SwiperSlide>
    <img src="../../../../../images/blog3.jpg" alt="" className='w-100 height-500'/>
    </SwiperSlide>
          </Swiper>
    </div>

  )
}
