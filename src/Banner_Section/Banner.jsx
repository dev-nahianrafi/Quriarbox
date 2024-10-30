import React from "react";
import banner__img from '../assets/bannerimage.png'

const Banner = () => {
  return (
    <>
      <div className="py-[120px] bg-[#ffedc9d3]">
        <div className="container mx-auto ">
          <div className="flex items-center justify-center gap-2">
            <div className="w-{516px} h-28 mb-24">
              <div className="w-[32rem]">
                <h1 className=" text-[#261134] font-Raleway text-4xl font-bold">
                  A trusted provider of
                  <div>
                  <span className=" text-[#261134] text-4xl font-bold ">
                    courier services.
                  </span>
                  </div>
                </h1>
              </div>
              <div>
                <div className="mt-4">
                  <p className=" text-[#4D4D4D] text-xl w-[20rem] font-normal ">
                    We deliver your products safely to your home in a reasonable
                    time.
                  </p>
                </div>
                <div>
                  <div className="banner__btn mt-10">
                  <a href="#" className="py-3 px-5 bg-orange-500 text-white font-bold text-2xl rounded-md">
                    Get Started
                  </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src={banner__img} alt="" className="w-[958px] h-[518px] top-0 left-0">
              </img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
