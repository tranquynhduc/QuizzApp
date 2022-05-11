import React from 'react'
import { useNavigate} from 'react-router-dom'
import SelectFiled from './../component/SelectFiled';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import TextFiledComp from '../component/TextFiledComp';
import UseAxios from './../hooks/UseAxios';


const Setting = () => {
  const { response, error, loading } = UseAxios({ url: '/api_category.php' })
  const navigate = useNavigate()
   console.log(response) 

  if (loading) {
    return (
      <Box mt={15}>
        <CircularProgress />
      </Box>)
  }
  if(error){
    return(
      <Typography variant='h1' mt={10} >
         Not Found
      </Typography>
    )
  }

  const hanldeSubmit = (e) => {
    e.preventDefault();

    //router
    navigate('/Questions')

  }
  const difficultyOptions = [
    {id:'easy' , name:'Dễ'},
    {id:'medium' , name:'Trung Bình'},
    {id:'hard' , name:'Khó'}

  ]
  const typeOptions=[
    { id:'multiple' , name:'Nhiều lựa chọn'},
   /*  { id:'bollean' , name:'true/false'}  */

  ]
  return (
    <form onSubmit={hanldeSubmit}>
       <h1>Quiz App</h1>
      <SelectFiled options={response.trivia_categories} label='Danh Mục' />
      <SelectFiled options={difficultyOptions} label='Mức độ' />
      <SelectFiled  options={typeOptions} label='Thể Loại' />
      <TextFiledComp />
      <Box mt={3} width='100%'>
        <Button fullWidth variant='contained' type='submit' >Bắt đầu</Button>
      </Box>
    </form>

  )
}

export default Setting