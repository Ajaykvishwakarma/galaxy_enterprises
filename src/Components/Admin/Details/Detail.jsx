import style from './Detail.module.css';
import { Navbar } from '../../Navbar/Navbar';
import { useEffect } from "react"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { perticularData } from "../../../Redux/action"
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
export const Detail = () => {

    const navigate = useNavigate()
    const tokenStr = localStorage.getItem('token')
    const token = tokenStr ? JSON.parse(tokenStr) : navigate('/signin')

    const { id } = useParams()
    const dispatch = useDispatch()

    const baseUrl = `https://galaxyenterprises.herokuapp.com`
    const { PertiData, loading, auth } = useSelector((store) => store)
    useEffect(()=>{
        let url = `${baseUrl}/contact/${id}`
        dispatch(perticularData(url))
    },[])




    return loading ? (
        <>
        <Navbar />
       
        <div className={style.spinner_div}>
        <Box>
            <CircularProgress />
        </Box>
        </div>
        </>
        ) : (
            <>
                <Navbar />
            
        <div className={style.detail_container}>
            <h3 className={style.heading}>Full Details</h3>
            {[PertiData].map((el) => (

            
            <div className={style.detail_div} key={el._id}>
                <div>
                    <h5>Name : <span>{el.firstName} {el.lastName}</span></h5>
                    <h5>Email : <span>{el.email}</span></h5>
                    <h5>Mobile : <span>{el.mobile}</span> </h5>
                    <h5>Address : <span>{el.address}</span></h5>
                    <h5>City : <span>{el.city}</span></h5>
                    <h5>State : <span>{el.state}</span></h5>
                    <h5>Date : <span>{el.date}</span></h5>
                </div>
                <div>
                <h6>Subject : <span>{el.subject}</span></h6>
                </div>
                <div>
                <h6>Message : <span>{el.message}</span></h6>
                </div>
            </div>
            ))}
            <div>
            <Link to="/admin"> <Button variant="outlined" style={{marginTop:"30px"}}>Back to dashboard</Button></Link>
            </div>
        </div>
        </>
    )
}