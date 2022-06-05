import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import style from './Footer.module.css';
export const Footer = () => {

    return (
        <div>
            <footer className={style.footer}>
                <div className={style.container}>
                    <div className={style.row}>
                        <div className={style.footer_col}>
                            <h4>company</h4>
                            <ul className = {style.list}>
                                <li><Link className={style.links} to="/">about us</Link></li>
                                <li><Link className={style.links} to="/">our services</Link></li>
                                
                            </ul>
                        </div>
                       
                        <div className={style.footer_col}>
                            <h4>Products</h4>
                            <ul className = {style.list}>
                                <li><Link className={style.links} to="/aluminium-window-door">Aluminium Doors</Link></li>
                                <li><Link className={style.links} to="/aluminium-window-door">Aluminium Windows</Link></li>
                                <li><Link className={style.links} to="/galaxy-internal-door">Galaxy Doors</Link></li>
                                <li><Link className={style.links} to="/upvc-window-door">UPVC products</Link></li>
                            </ul>
                        </div>
                        <div className={style.footer_col}>
                            <h4>follow us</h4>
                            <div className={style.social_links}>
                                <a className={style.links} href="https://www.facebook.com/profile.php?id=100011712677108" target="_blank"><FacebookIcon className={style.social_media_icon}/></a>
                                <a className={style.links} href="#" target="_blank"><InstagramIcon className={style.social_media_icon}/></a>
                                <a className={style.links} href="https://api.whatsapp.com/send?phone=8369635178&text=&source=&data=" target="_blank"><WhatsAppIcon className={style.social_media_icon}/></a>
                                <a className={style.links} href="#" target="_blank"><TwitterIcon className={style.social_media_icon}/></a>
                            </div>
                        </div>
                    </div>
                    <div className={style.footer2}>
                        <div></div>
                        <div>
                            <div><p>© Copyright 2022 Galaxy Enterprises. All rights reserved.</p></div>
                            <div><span>Privacy</span><span>Policy</span></div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

