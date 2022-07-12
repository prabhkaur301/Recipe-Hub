import './App.css';
import styled from 'styled-components'
import Pages from './Pages/Pages';
import Category from './Components/Category';
import Search from './Components/Search'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Box>
    <Search/>
    <Category/>
    </Box>
    <Pages/>
    </BrowserRouter>
  );
}
const Box=styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
`
export default App;
