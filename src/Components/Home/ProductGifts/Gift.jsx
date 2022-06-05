import React from 'react';
import 'antd/dist/antd.css';
import style from './Gift.module.css';
import { Tabs } from 'antd';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Show1  from "../../../Images/Homepage/Show1.jpg";
import Show2  from "../../../Images/Homepage/Show2.jpg";
import Show3  from "../../../Images/Homepage/Show3.jpg";
import Show4  from "../../../Images/Homepage/Show4.jpg";
import Show5  from "../../../Images/Homepage/Show5.jpg";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export const Gift = () => (
  <div className={style.gift_container}>
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Aluminium windows" key="1">
        <div className={style.gift_card}>
          <div className={style.gift_image_div}>
            <img src={Show1} alt='' className={style.gift_image} />
          </div>
            <div className={style.gift_text_div}>
              <div className={style.gift_text}>
                <div>
                  <h1>Aluminium Window Doors</h1>
                </div>
                <div>
                  <p>

                  Contemporary, sophisticated, robust, and easy-to-use – that is what aluminium windows stand for. These windows with their ability to withstand all climatic changes have made their way onto everyone’s list in recent times. Galaxy Enterprises have one of the largest and best aluminium windows and doors solutions in India.
                  </p>
                </div>
                <div >
                 <Link to='/upvc-window-door'> <Button variant="outlined">View Product</Button> </Link>
                </div>
              </div>
              
            </div>
             
          </div>
    </TabPane>
    <TabPane tab="Slidable Windows" key="2">
        <div className={style.gift_card}>
          <div className={style.gift_image_div}>
            <img src={Show2} alt='' className={style.gift_image} />
          </div>
            <div className={style.gift_text_div}>
              <div className={style.gift_text}>
                <div>
                  <h1>Sliding Window</h1>
                </div>
                <div>
                  <p>
                  A sliding window is a horizontal window pane with a belt to slide to and fro. Slider window is one of the most popular today and is also known as glider or slider. It is especially similar to a double-sided hung window turned on its side. The window opens by moving the belt to both other. Sliding windows function well on walls where there isn’t enough vertical height or space, yet there is a lot of horizontal areas. They offer a premium modern look than the conventional colonial style twofold hung windows.
                  </p>
                </div>
                <div >
                 <Link to='/upvc-window-door'> <Button variant="outlined">View Product</Button> </Link>
                </div>
              </div>
              
            </div>
             
          </div>
    </TabPane>
    <TabPane tab="Openable Windows" key="3">
        <div className={style.gift_card}>
          <div className={style.gift_image_div}>
            <img src={Show3} alt='' className={style.gift_image} />
          </div>
            <div className={style.gift_text_div}>
              <div className={style.gift_text}>
                <div>
                  <h1>Openable Windows</h1>
                </div>
                <div>
                  <p>
                  Openable windows the best windows to improve sound insulation. They come with two hinge systems, Easy clean and End opening. 
                  Easy clean hinges allow for cleaning of the glass on both sides. 

                  End opening panels are recommended for double openable shutters. 

                  Colour options availble are White, Walnut, Light oak, Mahagony, Flemish gold, Black and Dark Oak. 

                  The windows can be offered from 5mm glass upto 40mm glass systems. 
                  </p>
                </div>
                <div >
                 <Link to='/upvc-window-door'> <Button variant="outlined">View Product</Button> </Link>
                </div>
              </div>
              
            </div>
             
          </div>
    </TabPane>
    <TabPane tab="Tilt And Turn" key="4">
        <div className={style.gift_card}>
          <div className={style.gift_image_div}>
            <img src={Show4} alt='' className={style.gift_image} />
          </div>
            <div className={style.gift_text_div}>
              <div className={style.gift_text}>
                <div>
                  <h1>Tilt And Turn</h1>
                </div>
                <div>
                  <p>
                  Tilt and turn windows are extremely versatile windows. Such a type of window has a sash that tilts and opens at a particular angle from the top along with hinges at the base. The sash can also swing towards the inside with side hinges. Having a state-of-the-art design, tilt and turn windows look classy. So, irrespective of the fact that the tilt and turn window is large or small, you will get an aesthetically appealing window style.
                  There are triple glass panes / triple glazed and double glass panes / double glazed tilt and turn windows available nowadays, which gives homeowners multiple options to choose from. These windows are gradually becoming very popular with homeowners. Such is the widespread use of these windows that even uPVC stable doors have started coming with tilt and turn windows.
                  </p>
                </div>
                <div >
                 <Link to='/galaxy-internal-door'> <Button variant="outlined">View Product</Button> </Link>
                </div>
              </div>
              
            </div>
             
          </div>
    </TabPane>
    <TabPane tab="Sliding And Folding Doors" key="5">
        <div className={style.gift_card}>
          <div className={style.gift_image_div}>
            <img src={Show5} alt='' className={style.gift_image} />
          </div>
            <div className={style.gift_text_div}>
              <div className={style.gift_text}>
                <div>
                  <h1>Sliding And Folding Doors</h1>
                </div>
                <div>
                  <p>
                  better in rooms overlooking gardens and terraces. This new-generation door, designed for large openings, joins multiple sashes in a unique slide and fold mechanism. The sashes move in either direction (left or right) and can be stacked at either end. It can open from wall to wall for maximum unobstructed opening to the outside, or open partly for ventilation and access. When closed it is extremely secured and insulated, and comes across as a beautiful wall of door panels.
                   </p>
                </div>
                <div >
                 <Link to='/aluminium-window-door'> <Button variant="outlined">View Product</Button> </Link>
                </div>
              </div>
              
            </div>
             
          </div>
    </TabPane>
    
  
  </Tabs>
  </div>
);




