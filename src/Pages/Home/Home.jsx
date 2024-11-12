
import React from 'react'
import Banner from '../../Banner_Section/Banner.jsx'
import Testimonial from "../Testimonial/Testimonial";
import FindUs from "../findUs/FindUs";
import Callback from "../callBack/Callback";


export default function Home() {
  return (
    <>
      <Banner/>
      <Testimonial />
      <Callback/>
      <FindUs/>
    </>
  );
}
