import React from 'react'
import { Box, FormControl, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { handleAmountChange } from './../redux/Action';

const TextFiledComp = () => {
    const dispatch= useDispatch();
    const hanldeChange = (e)=>{
        dispatch(handleAmountChange(e.target.value))
    }
  return (
   <Box mt={3} width='100%'>
       <FormControl fullWidth size='small'>
           <TextField
           variant='outlined'
           label='Số lượng câu hỏi'
           type='number'
           size='small'
           onChange={hanldeChange}/>
       </FormControl>

   </Box>
  )
}

export default TextFiledComp