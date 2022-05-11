import { useEffect, useState } from 'react'
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import UseAxios from './../hooks/UseAxios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleScoreChange } from './../redux/Action';
import {decode} from 'html-entities';

const RandomInt = (int) => {
  return Math.floor(Math.random() * Math.floor(int))
  
}

const Questions = () => {
  const { question_category, question_difficulty, question_type, amount_of_question,score } = useSelector(state => state);
  const dispatch =useDispatch();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const Navigate =useNavigate();
  console.log(options);


  /*   */
  let apiUrl = `/api.php?amount=${amount_of_question}`;
  //
  const { response, loading } = UseAxios({ url: apiUrl })
  console.log(response);
  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }
  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers]
       answers.splice(
        RandomInt(question.incorrect_answers.length)
        ,0
        ,question.correct_answer
       ) ;
       setOptions(answers)
    }
  }, [response, questionIndex])
  if (loading) {
    return (
      <Box mt={15}>
        <CircularProgress />
      </Box>)
  }

  const hanldeClickAnswer = (e) =>{
    const question = response.results[questionIndex];
    if(e.target.textContent === question.correct_answer){
      dispatch(handleScoreChange(score + 1))
    }
    if(questionIndex + 1 < response.results.length){
      setQuestionIndex(questionIndex + 1 )
    }else{
      Navigate('/Scores')
    }
  }
  return (
    <Box>
      <Typography variant='h4'>Câu hỏi {questionIndex + 1}</Typography>
      <Typography mt={5}>{decode(response.results[questionIndex].question)} </Typography>
     {options.map((data , id )=>(
        <Box mt={2} key={id}>
        <Button onClick={hanldeClickAnswer} variant='contained' >{data}</Button>
      </Box>
     ))}
      <Box mt={2}>
        <Button mt={5}> Score: {decode(score)} /{response.results.length}</Button>
      </Box>

    </Box>
  )
}

export default Questions