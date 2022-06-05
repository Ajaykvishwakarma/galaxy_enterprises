import style from './NotFound.module.css';
import { Link } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import NotFound1 from '../../Images/NotFound1.gif';
export const NotFound = () => {
    return  (
      <>
      <Navbar />
      
    <div className={style.notfound}>
      
      <Link to="/">
      <img className={style.notfoundImage} src={NotFound1} alt="" />
      </Link>
    </div>
    </>
    )
  };
  