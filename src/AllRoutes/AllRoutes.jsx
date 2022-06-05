
import { Route, Routes } from 'react-router-dom' ;
import { Home } from '../Components/Home/Home';

import { Sticky } from '../Components/Sticky/Sticky';
import { Header } from '../Components/Header/Header';
import { SpeedDiales } from '../Components/SpeedDial/SpeedDial';
import { Footer } from '../Components/Footer/Footer';
import { Contact } from '../Components/Contact/Contact';
import { Blog } from '../Components/Blog/Blog';
import { Upvc } from '../Components/Upvc/Upvc';
import { GalaxyInternalDoor } from '../Components/GalaxyInternalDoor/GalaxyInternalDoor';
import { AluminiumWindowDoor } from '../Components/AluminiumWindowDoor/AluminiumWindowDoor';
import { Login } from '../Components/Auth/Login/Login';
import { Admin } from '../Components/Admin/Admin';
import { Detail } from '../Components/Admin/Details/Detail'
import { NotFound } from '../Components/Notfound/NotFound';

export const AllRoutes = ()=>{

    return (
        <>
            <Header />
            {/* <Navbar /> */}
            <Sticky />
            <SpeedDiales />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/contact' element={<Contact />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/upvc-window-door' element={<Upvc />} />
                <Route path='/galaxy-internal-door' element={<GalaxyInternalDoor />} />
                <Route path='/aluminium-window-door' element={<AluminiumWindowDoor />} />
                <Route path='/signin' element={<Login />} />
                <Route path='/admin' element={<Admin /> } />
                <Route path='/contact/:id' element={<Detail />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}