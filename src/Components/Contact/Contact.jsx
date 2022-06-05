import { ContactForm } from '../ContactForm/ContactForm';
import style from './Contact.module.css';
import { Store } from '../StoreLocator/Store';
import { Navbar } from '../Navbar/Navbar';
export const Contact = () => {

    return (
        <div>
            <Navbar />
        <div className={style.contact_controller}>
            <div className={style.cont_details}>
                <div>
                    <h3>Come and visit our Shop @</h3>
                </div>
                <div>
                    <h4>Shop No. 24, C-wing, Raj Vaibhav, Indralok, Phase-VI, Bhayandar (E), Off. BSES Tower Road, Thane - 401105.

                    </h4>
                </div>
                <div>
                    <h5>Mon - Sun: 9am - 10pm</h5>
                    
                        <p style={{marginTop:"50px"}}><a href="mailto: ankitv7715@gmail.com" style={{color:"black"}} > ankitv7715@gmail.com  </a> | +91 8369635178</p>
                   
                </div>
            </div>
            <div className={style.cont_form}>
                <ContactForm />

            </div>
        </div>
        <div>
            <Store />
        </div>
        </div>
    )

}