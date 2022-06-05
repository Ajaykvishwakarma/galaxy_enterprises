
import React from "react";
import  style from "./Sticky.module.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from '@mui/material/Link';
export const Sticky = () => {

  return (
      <div>
    <section className={style.sticky}>
     <div>
     
     <Link href="https://api.whatsapp.com/send?phone=918369635178&text=&source=&data=" className={style.whatsApp} target="_blank">
       <WhatsAppIcon className={style.whatsicons}/>
       </Link>

      </div>
    </section>
    </div>
  );
}
// export default Sticky;
    