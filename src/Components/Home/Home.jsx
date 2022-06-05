
import { Slider } from './Slider/Slider';
import { Store } from '../StoreLocator/Store';
import style from './Home.module.css';
import Typography from '@mui/material/Typography';
import { Gift } from './ProductGifts/Gift';
import { Navbar } from '../Navbar/Navbar';
export const Home = () => {

    return (
        <>
        <Navbar />
    
        <div className={style.home_container}>
            <div className={style.descriptiion}>
                <div>
                    <h4>Windows And Door solution</h4>
                </div>
                <div>
                    <h6>We are your one stop solutions for all your window and door requirements made by Galaxy Enterprises. </h6>
                </div>
                <div>
                    <h6>We also provide all types of Sun film of kitchen cover with Aluminium</h6>
                </div>

            </div>
            <div>

            <Slider />
            </div>
            <div className={style.about_div}>
                <div>
                <Typography variant="h4" >
                    About Us
                </Typography>
                <Typography variant="h6" gutterBottom>
                     THE FULL STORY
                </Typography>
                </div>
                <div>
                    <p className={style.about_desc} >
                   In 1990, Windows & Doors solution started of our first range of product we are providing PVC false Ceiling and Domal window & Bathroom doors and partition.
                   We have been working extensivaly with Relience compony and private developers to supply more windows and doors till date, in 2012 we joined hand with window and door building 
                   systems after realize the compony's vision of providing world class window & door system made in India.
                   We proudly say that in 5 year we have been assosiated with window and door solution, we have served more then 500 customers and completed more then 5500 intallation of windows, doors and partition.  
                    </p>
                </div>
               
            </div>
            <div>
                <Gift />
            </div>
            <div className={style.suggetion}>
                <h3>Get in touch</h3>
                <p >For all your requirements for Aluminium Door, Sliding & Fix window, Partition structure, Glazing, Touhened glass, Sun film, False ceiling, Balcony cover, Zypsum, Domal window. from Galaxy Enterprises Mumbai.</p>
            </div>
            <div>
                <Store  />
            </div>
        </div>
        </>
    )
}


