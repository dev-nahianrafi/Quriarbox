import React from "react";
import quote from "../../assets/quote.svg";
import star from "../../assets/star.svg";
import women from "../../assets/women.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";


const TestimonialCard = () => {
  const arr = [
    { name: "Yves Tanguy", designation: "Chief Executive, DLF" },
    { name: "Dev sultan", designation: "Chief Executive, MERN" },
    { name: "Dev Rafi", designation: "Chief Executive, MMF" },
    { name: "Dev pronob", designation: "Chief Executive, DLD" },
    { name: "Dev Nayeem", designation: "Chief Executive, LLC" },
  ];
  return (
    <div className="pl-[220px] pr-[228px] flex flex-col gap-y-[75px] ">
      <div className="flex flex-row gap-x-[38px] ml-[61px] ">
        <img src={quote} className="testimonial-quote" alt="not found" />
        <div className="flex flex-col gap-y-[10px]  items-center ">
          <h3 className="testimonial-heading">TESTIMONIAL</h3>
          <h2 className="testimonial-sub-heading">Our Awesome Clients</h2>
        </div>
      </div>
      <Swiper
        style={{ height: "100%", width: "872px" }} 
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        className="mySwiper"
      >
        {arr.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="service-card">
              <div className="flex flex-col gap-y-[11px] ">
                <h3 className="service-card-heading">Fantastic service!</h3>
                <p className="service-para">
                  I purchased a phone from an e-commerce site, and this courier
                  service provider assisted me in getting it delivered to my
                  home. I received my phone within one day, and I was really
                  satisfied with their service when I received it. They are
                  really quick and dependable. They give me with the option of
                  real-time delivery status, which allows me to track the
                  progress of my goods delivery. I get a lot of questions from
                  call center support and key account managers. They come highly
                  recommended. Confidently say that they are really reliable.
                </p>
              </div>
              <div className="flex flex-row items-center justify-between ">
                <div className="flex flex-row gap-x-[7px] ">
                  {arr.map((item, index) => (
                    <img
                      src={star}
                      alt="not found"
                      key={index}
                      className="service-star"
                    />
                  ))}
                </div>
                <div className="flex flex-row gap-x-[13px] items-center ">
                  <div className="flex flex-col gap-y-[2px] items-end ">
                    <h4 className="service-client-name"> {item.name} </h4>
                    <p className="service-client-designation">
                      {item.designation}
                    </p>
                  </div>
                  <div
                    className="service-client-bg-img"
                    style={{
                      backgroundImage: `url(${women})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCard;
