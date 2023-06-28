import React from "react";
import "./Swiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function swiper() {
  return (
    <React.Fragment>
      <div className="products">
        <div className="swipercont">
          <div className="swiper">
            <Swiper
              className=""
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
            <div style={{
                height: '600px',
                backgroundImage: "url(https://images.unsplash.com/photo-1592754862816-1a21a4ea2281?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80)",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}></div>
           
              </SwiperSlide>
              <SwiperSlide>
              <div style={{
                height: '600px',
                backgroundImage: "url(https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80)",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}></div>
              </SwiperSlide>
              <SwiperSlide>
              <div style={{
                height: '600px',
                backgroundImage: "url(https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80)",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}></div>
              </SwiperSlide>
              <SwiperSlide>
              <div style={{
                height: '600px',
                backgroundImage: "url(https://images.unsplash.com/photo-1625316708582-7c38734be31d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2831&q=800)",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}></div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="swiper1">
            <Swiper
              className="swiper1"
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={5}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
              <SwiperSlide>Slide 10</SwiperSlide>
              <SwiperSlide>Slide 11</SwiperSlide>
              <SwiperSlide>Slide 12</SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="swiper-title">
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            voluptatem architecto deserunt consequatur, corporis, voluptate eos
            labore ducimus possimus necessitatibus sequi! Magni id ex facere sit
            eius ullam nesciunt provident.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            voluptatem architecto deserunt consequatur, corporis, voluptate eos
            labore ducimus possimus necessitatibus sequi! Magni id ex facere sit
            eius ullam nesciunt provident.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            voluptatem architecto deserunt consequatur, corporis, voluptate eos
            labore ducimus possimus necessitatibus sequi! Magni id ex facere sit
            eius ullam nesciunt provident.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            voluptatem architecto deserunt consequatur, corporis, voluptate eos
            labore ducimus possimus necessitatibus sequi! Magni id ex facere sit
            eius ullam nesciunt provident.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            voluptatem architecto deserunt consequatur, corporis, voluptate eos
            labore ducimus possimus necessitatibus sequi! Magni id ex facere sit
            eius ullam nesciunt provident.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default swiper;
