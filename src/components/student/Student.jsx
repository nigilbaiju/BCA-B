import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import './student.css'

const Student = () => {
  return (
    <div className='aa'>
      <Typography>REGISTRATION FORM</Typography><br/>
      <TextField id="filled-basic" label="Admission No" variant="filled" /><br/><br/>
      <TextField id="filled-basic" label="NAME" variant="filled" /><br/><br/>
      <TextField id="filled-basic" label="Age" variant="filled" /><br/><br/>
      <Button variant="contained">SUBMIT</Button>
    </div>
  )
}

export default Student
