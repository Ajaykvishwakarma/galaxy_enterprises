
import React from "react";
import style from './Header.module.css';

export const  Header = () => {
  return (
      <div id={style.home} >
        <section className={style.header}>
        <div>
            <h1>
                {/* <img src="https://img.icons8.com/ios-filled/50/000000/india-map.png"/> */}
                India’s Most <span className={style.safe}>Stylish</span> Window And Door Solutions </h1>
            
        </div>
        </section>
        </div>
  );
}
