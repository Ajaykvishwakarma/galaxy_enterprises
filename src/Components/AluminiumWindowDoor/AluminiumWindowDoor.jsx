import style from './AluminiumWindowDoor.module.css';
import { Navbar } from '../Navbar/Navbar';
import Head1 from '../../Images/Aluminium/Head1.jpg';
import img1 from '../../Images/Aluminium/img1.jpg';
import img2 from '../../Images/Aluminium/img2.jpg';
import img3 from '../../Images/Aluminium/img3.jpg';
import img4 from '../../Images/Aluminium/img4.jpg';
export const AluminiumWindowDoor = () => {

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
                        <h2>Aluminium Fixed windows</h2>
                        <p>
                        The purpose of Aluminium Fixed Window is to provide architectural completion and aesthetical framing of the house. They don’t have any operable parts and are fixed at a place where they are installed.These windows are installed at a height, where ample amount of sunlight can enter the room.

                            Aluminium Fixed Windows are highly recommended for–Kitchens, Bathrooms, A/C Bedrooms and Living Rooms and Apartment Stairways.

                            Aluminium Fixed Windows are available in many variants that would allow you to look beyond aesthetics such as numerous geometric shapes, sizes, Colors and Profiles.
                        </p>
                    </div>
                </div>
                <div className={style.card_controller}> 
               
                    <div className={style.card2}>
                        <h2>Aluminium Partition</h2>
                        <p>
                        To supply the ever rising needs of our customers, we are occupied in offering a wide range of Partition with Door.
                        Aluminum Glass Partition are known for their unmatched quality and high resistance to corrosion and abrasion.
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
                        <h2>Aluminum Glazed Doors</h2>
                        <p>
                        we are instrumental in offering supreme quality range of Aluminium Door.<br></br>
                        <h4 style={{textAlign: "left"}}>Features:</h4>
                        <ul style={{textAlign: "left"}}>
                            <li>Attractive designs</li>
                            <li>Quick installation</li>
                            <li>Long lasting life</li>
                        </ul>
                        </p>
                    </div>
                </div>
                <div className={style.card_controller}> 
               
                    <div className={style.card2}>
                        <h2>Aluminium Balcony cover</h2>
                        <p>
                        Creative and hardworking professionals leave no stone unturned in presenting patrons with the best quality of Aluminum Balcony Covering.
                        <h4 style={{textAlign: "left"}}>Features:</h4>
                        <ul style={{textAlign: "left"}}>
                            <li>Corrosion resistant</li>
                            <li>Smooth finishing</li>
                            <li>High strength</li>
                            <li>Durable</li>
                            <li>Ability to withstand high mechanical stress</li>
                        </ul>
                        </p>
                    </div>
                    <div className={style.card1}>
                        <img className={style.card_image} src={img4} alt="" />
                    </div>
                </div>
            </div>
            

        </div>
    )
}