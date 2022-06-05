import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import style from './Admin.module.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchData, deleteData } from '../../Redux/action';

import Pagination from '@mui/material/Pagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Navbar } from '../Navbar/Navbar';



export const Admin = () => {
    const navigate = useNavigate()
    const tokenStr = localStorage.getItem('token')
    const token = tokenStr ? JSON.parse(tokenStr) : navigate('/signin')
    const [currPage, setCurrPage] = useState(1)

    const dispatch = useDispatch()
 

    const { dataObj, loading } = useSelector((store) => store)
    const baseUrl = 'https://galaxyenterprises.herokuapp.com';
   
    useEffect(() => {
        let url = `${baseUrl}/contacts`
        dispatch(fetchData(url))
    }, [])
   
    const handleDelete = (id) => {
        let url = `${baseUrl}/contact/${id}`
        dispatch(deleteData(url))
    }
   
    async function pageChange(page) {
        setCurrPage(page)
        let url = `${baseUrl}/contacts?page=${page}`
        dispatch(fetchData(url))
    }


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
                
        <div className={style.admin_controller}>
            <div className = {style.contact_container}>
                <div>
                <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Address</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Mobile</TableCell>
                    <TableCell align="center">City</TableCell>
                    <TableCell align="center">Remove_More</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {dataObj.contacts?.map((row) => (
                    <TableRow
                    key={row.firstName}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.firstName} {row.lastName}
                    </TableCell>
                    <TableCell align="center">{row.address}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.mobile}</TableCell>
                    <TableCell align="center">{row.city}</TableCell>
                    <TableCell align="right" >
                    <Stack direction="row" spacing={2} style={{width:"70%", margin:"auto"}}>
                        <Button variant="outlined" style={{margin:"auto"}}  onClick={() => handleDelete(row._id)}>
                            <DeleteIcon />
                        </Button>
                        <Link to={`/contact/${row._id}`}> <Button variant="contained" style={{margin:"auto"}}>
                                <SendIcon />
                        </Button> </Link>
                        </Stack>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
                </div>
            </div>
            <div className={style.pagination}>
                <Pagination defaultPage={currPage} count={dataObj.totalPages?.length} onChange={(e, value) => {pageChange(value)}} />
            </div>

        </div>
        </>

    )
}