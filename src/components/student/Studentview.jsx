import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

const Studentview = () => {
    var[students,setStudents] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3005/sview")
        .then(response =>{
            console.log(response.data)
            setStudents(response.data)
        })
        .catch(err=>console.log(err))
    })

const deletevalues =(id)=>{
    console.log("deleted",id)
    axios.put("http://localhost:3005/updatestatus/"+id)
    .then((response)=>{
        alert("DELETED")
    window.location.reload(false);
    })
}

  return (
    <div>
      <Typography >STUDENT VIEW</Typography><br/><br/>
      <TableContainer>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell >Admission No</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Age</TableCell>
            <TableCell >Status</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {students.map((value,index)=>{
                return(
                    <TableRow key={index}>
                        <TableCell>{value.Admno}</TableCell>
                        <TableCell>{value.Sname}</TableCell>
                        <TableCell>{value.Age}</TableCell>
                        <TableCell>{value.Status}</TableCell>
                        <TableCell><ModeEditOutlineIcon color='success'/></TableCell>
                        <TableCell><DeleteForeverIcon color='error' onClick={()=>deletevalues(value._id)}/></TableCell>
                    </TableRow>
                )
            })}
        </TableBody>

      </Table>
    </TableContainer>

    </div>
  )
}

export default Studentview
