import { CircularProgress, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Table from '@mui/material/Table';
import { useEffect, useState } from "react";

export default function MyTable() {

    const [user,setUser] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(  () => {
        fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data =>{setUser(data.results),setLoading(false)} )
    } )

    if(loading){
        return <CircularProgress />
    }

    return (
        <TableContainer component={Paper} >  
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Nama</TableCell>
                        <TableCell>Alamat</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                {user.map((user,index)=>(
                    <TableRow key={index} className="hover:bg-gray-100">
                     <TableCell>{user.name.first}</TableCell>
              <TableCell>{user.name.last}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} className="rounded-full" />
              </TableCell>
            </TableRow>
                ))}
                    
                </TableBody>
            </Table>
        
        </TableContainer>
    )
}