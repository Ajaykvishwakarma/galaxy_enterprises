import React from 'react';
import 'antd/dist/antd.css';
import style from './Slider.module.css'
import { Carousel } from 'antd';
import Slider1  from "../../../Images/Homepage/Slider1.jpg";
import Slider2  from "../../../Images/Homepage/Slider2.jpg";
import Slider3  from "../../../Images/Homepage/Slider3.jpg";
import Slider4  from "../../../Images/Homepage/Slider4.jpg";
// import logo from './logo.png';
const contentStyle = {
    height: '450px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    width: '100%'
  };
export const Slider = () => 
{

return (
    <div>
  <Carousel autoplay  
  transitionTime={700}   
  interval={1000}
  infiniteLoop 
  className={style.CarouselTag}>
    <div className={style.slider_container}>
      <img src={Slider1} alt="1" style={contentStyle}/>
    </div>
    <div>
     <img src={Slider2} alt="2" style={contentStyle}/>
    </div>
    <div>
     <img src={Slider3} alt="3" style={contentStyle}/>
    </div>
    <div>
     <img src={Slider4} alt="4" style={contentStyle}/>
    </div>
  </Carousel>
  </div>
    )
}