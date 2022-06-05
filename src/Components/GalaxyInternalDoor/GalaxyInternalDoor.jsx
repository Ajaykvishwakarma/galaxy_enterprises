import style from './GalaxyInternalDoor.module.css';
import { Navbar } from '../Navbar/Navbar';
import Head1 from '../../Images/Galaxy/Head1.jpg';
import img1 from '../../Images/Galaxy/img1.jpg';
import img2 from '../../Images/Galaxy/img2.jpg';
import img3 from '../../Images/Galaxy/img3.jpg';
export const GalaxyInternalDoor = () => {

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
                        <h2>Residetial Doors</h2>
                        <p>
                        residential doors are used for housing areas. Interior doors for homes have a better aesthetic appearance than traditional commercial doors. Homeowners often opt for eye-catching door designs, adding to the overall appearance of their residence. The height of residential doors does not vary much from the standardized height of 7 feet and a width spanning between 3.5 to 5 feet. The standard manufacturing materials for residential doors include wood and fiberglass, depending upon the homeowner’s choice and budget. Residential steel doors also exist nowadays and are getting very popular.  
                        </p>
                    </div>
                </div>
                <div className={style.card_controller}> 
               
                    <div className={style.card2}>
                        <h2>Commercial Doors</h2>
                        <p>
                        Commercial doors are used for spaces used for commercial purposes. Thus, they are built for functionality rather than form. As a result, they have a wide field of applications ranging from institutions, industries, storage, transportation, and warehousing facilities. The doors open and close several times a day and are built accordingly for the long run. Commercial spaces house large vehicles and large overhead types of machinery in several cases. In addition, storage facilities often require insulation to preserve products at optimum temperatures. Thus, the building components are more robust, durable, and withstand high impact.  
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
                        <h2>Combination Doors</h2>
                        <p>
                        Depending on the requirement, Galaxy Enterprises offer all types of residential and commercial doors with additional maintenance and service options. A flagship brand under the world-renowned Tata group of industries, 
                        </p>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}