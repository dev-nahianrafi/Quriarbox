import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineTextsms } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

const FindUs = () => {
  return (
    <section className='my-[183px]'>
      <div className='container mx-auto'>
        <div>
          <h4 className='text-center text-[31.25px] font-normal leading-normal text-primary-orange'>FIND US</h4>
          <h4 className='text-center text-[39px] font-normal leading-relaxed text-[#222132]'>Access us easily</h4>
          <div className='mt-[85px] flex gap-x-6'>
            <div className='w-[760px] h-[428px] truncate'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233738.90505383417!2d90.12621560074511!3d23.741302499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1730793517349!5m2!1sen!2sbd" className='w-full h-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='w-[536px] h-[428px] bg-[#FEFCFA] pt-[81px] pl-[88px] pr-[126px]'>
              <span className='text-xl	font-normal leading-normal text-primary-gray'>Contact with us</span>
              <div className='mt-[37px]'>
                <div className='flex items-center gap-x-[13px] text-[#5C5B6C] text-base	font-normal leading-[19.2px]'>
                  <span className='text-[#FFAF0F]'><IoLocationOutline /></span>
                  <span>2277 Lorem Ave, San Diego, CA 22553</span>
                </div>
                <div className='flex items-center gap-x-[13px] text-[#5C5B6C] text-base	font-normal leading-[19.2px] mt-[18px]'>
                  <span className='text-[#FFAF0F]'><FaRegClock /></span>
                  <span>Monday - Friday: 10 am - 10pm
                  Sunday: 11 am - 9pm</span>
                </div>
                <div className='flex items-center gap-x-[13px] text-[#5C5B6C] text-base	font-normal leading-[19.2px] mt-4'>
                  <span className='text-[#FFAF0F]'><MdOutlineTextsms /></span>
                  <span>info@quriarbox.com</span>
                </div>
              </div>
              <div className='mt-[51px] flex gap-x-5'>
                <div className='cursor-pointer'><FaFacebook /></div>
                <div className='cursor-pointer'><FaInstagram /></div>
                <div className='cursor-pointer'><FaTwitter /></div>
              </div>
            </div>
          </div>
          <div className='mt-[30px] w-[560px] h-[71px] bg-primary-orange mx-auto'>
            <div className='pt-[25px]'>
              <div className='flex justify-center items-center gap-x-3 text-xl	font-normal leading-normal text-white cursor-pointer'>
                <span ><BsTelephoneFill /></span>
                <span>Call us to delivery  123-456789</span>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </section>
  )
}

export default FindUs
