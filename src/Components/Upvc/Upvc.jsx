import style from './Upvc.module.css';
import { Navbar } from '../Navbar/Navbar';
import Head1 from '../../Images/UPVC/Head1.jpg';
import img1 from '../../Images/UPVC/img1.jpg';
import img2 from '../../Images/UPVC/img2.jpg';
import img3 from '../../Images/UPVC/img3.jpg';
import img4 from '../../Images/UPVC/img4.jpg';
import img5 from '../../Images/UPVC/img5.jpg';
import img6 from '../../Images/UPVC/img6.jpg';
import img7 from '../../Images/UPVC/img7.jpg';
import img8 from '../../Images/UPVC/img8.jpg';

export const Upvc = () => {

    return (
        <div>
            <Navbar />
            <div className={style.product_container}>
               <div className={style.photo_image}>
                    <img src={Head1} alt='Card' className={style.photo_img} />
                </div>
                <div className={style.card_controller}> 
                    <div className={style.card1}>
                        <img className={style.card_image} src={img1} alt="" />
                    </div>
                    <div className={style.card2}>
                        <h2>Casement Windows</h2>
                        <p>Casement windows are ideal for spaces with excellent exterior views. They are equipped with a unique double sealing mechanism that makes them air-tight and keeps out the noise, dust, and pollution. Casement windows are available in an array of choices complementing your home decor. Casement windows are held by hinges and open inwards or outwards, depending on the functionality required. Apart from this, we provide sturdy and aesthetically appealing wood, aluminium, and uPVC window frames for enhanced security and kerb appeal. </p>
                    </div>
                </div>
                <div className={style.card_controller}> 
               
                    <div className={style.card2}>
                        <h2>SLIDING WINDOWS</h2>
                        <p>
                          Slider doors and windows consist of two or more sashes that open horizontally. These windows are placed along a track and fitted to rollers that enable smooth and swift movement. Further, as the sashes stay within the frame instead of opening outwards or inwards, sliding windows offer optimum space utilisation. Install them with aluminium, wood, or uPVC frames and enjoy a great panoramic view of the outdoors.
                        </p>
                    </div>
                    <div className={style.card1}>
                        <img className={style.card_image} src={img2} alt="" />
                    </div>
                </div>
                <div className={style.card_controller}> 
                    <div className={style.card1}>
                        <img className={style.card_image} src={img3} alt="" />
                    </div>
                    <div className={style.card2}>
                        <h2>Fixed Windows</h2>
                        <p>
                        For the spaces in your house that require natural lighting, the stationary, non-operative fixed window design is the ideal solution. It keeps out heat, dust, and noise and offers an unobstructed view for a greater aesthetic appeal. This type of windows can be further paired with other window styles and fitted in aluminium, wood, or uPVC frames for an appealing look and improved functionality.
                        </p>
                    </div>
                </div>
                <div className={style.card_controller}> 
               
                    <div className={style.card2}>
                        <h2>Glass to Glass Windows</h2>
                        <p>
                        Glass to glass windows consist of glass panes that are seamlessly joined together, thereby eliminating the usage of mullions. They are stylish and complement contemporary interior designs to provide exceptional panoramic views from every angle, without any obstruction. Also available in aluminium, wood, and uPVC frames, glass to glass windows add a beautiful dimension to homes and create the illusion of an open space.
                        </p>
                    </div>
                    <div className={style.card1}>
                        <img className={style.card_image} src={img4} alt="" />
                    </div>
                </div>
                <div className={style.card_controller}> 
                    <div className={style.card1}>
                        <img className={style.card_image} src={img5} alt="" />
                    </div>
                    <div className={style.card2}>
                        <h2>Bay Windows</h2>
                        <p>
                        Perfect for the small protruding space in bedrooms or living rooms, bay windows create a cosy personal corner. They are a combination of three or more windows assembled together that extend outside the house, thus forming a bay shape and increasing the indoor space. Install this unique design with aluminium, wood, or uPVC frames to enhance the aesthetic appeal and functionality of the room.
                        </p>
                    </div>
                </div>
                <div className={style.card_controller}> 
               
                    <div className={style.card2}>
                        <h2>Arched Windows</h2>
                        <p>
                        Arch-shaped windows are rectangular at the bottom and semi-circular at the top. Adding an aesthetic appeal to the overall look of the room, these round-top windows come in two styles – they can be fixed or can be opened to let the air in. Grids (bars dividing the windows’ glass) are often added to these durable and elegant looking windows to make them more utilitarian. They are available in various accents such as aluminium, wood, and uPVC frames to complement your overall home décor.
                        </p>
                    </div>
                    <div className={style.card1}>
                        <img className={style.card_image} src={img6} alt="" />
                    </div>
                </div>
                <div className={style.card_controller}> 
                    <div className={style.card1}>
                        <img className={style.card_image} src={img7} alt="" />
                    </div>
                    <div className={style.card2}>
                        <h2>Combination Windows</h2>
                        <p>
                        Functional in their essence, combination aluminium, wood, or uPVC windows are a blend of sliding, casement, and fixed windows. They are either a blend of the same type or different types of windows. Alternatively, they can be custom-made to fit individual preferences. Combination windows are designed to allow a lot of natural light and add the perfect touch of aesthetics to your room.
                        </p>
                    </div>
                </div>
                <div className={style.card_controller}> 
               
                    <div className={style.card2}>
                        <h2>Specialised Windows</h2>
                        <p>
                        Customised aluminium, wood, or uPVC windows come in various shapes such as hexagons, triangles, octagons, trapezoids, and many more. A multiplicity of architectural designs can be achieved by using the variety of shapes that these windows offer. When these are installed, the overall kerb appeal of the house increases as well.
                        </p>
                    </div>
                    <div className={style.card1}>
                        <img className={style.card_image} src={img8} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}