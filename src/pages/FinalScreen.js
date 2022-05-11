import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleScoreChange, handleAmountChange } from './../redux/Action';

const FinalScreen = () => {
  const dispatch = useDispatch();
   const {score}=useSelector(state => state);
  const navigate= useNavigate();
  const handleClickQuizzApp = () =>{
    dispatch(handleScoreChange(0))
    dispatch(handleAmountChange(50))
    navigate('/')
  } 
  return (
      <Box>
        <Typography variant='h3' fontWeight='bold'mb={5} >Final Score:{score}</Typography>
        <Button  onClick={handleClickQuizzApp} variant='outlined'>Back to Quizz App</Button>
      </Box>
      )
}

export default FinalScreen