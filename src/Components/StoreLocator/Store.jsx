import style from './Store.module.css';

export const Store = () => {


    return(
        <div>
            <div className={style.store_continer}>
            <iframe src="https://maps.google.com/maps?q=meraroad,mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"  className={style.map}></iframe>
            </div>
        </div>
    )

}