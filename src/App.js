
import { Routes, Route } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material'
import Setting from './pages/Setting';
import Questions from './pages/Questions';
import FinalScreen from './pages/FinalScreen';

function App() {
  return (
    <Container maxWidth='sm' >
      <Box textAlign='center' mt={5}>
        <Routes>
          <Route path='/' element={<Setting />}/>
          <Route path='/Questions' element={<Questions />}/>
          <Route path='/Scores' element={<FinalScreen />} />
        </Routes>
      </Box>
    </Container>


  );
}

export default App;
