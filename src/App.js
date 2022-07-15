import './App.css';
import styled from 'styled-components'
import Pages from './Pages/Pages';
import Category from './Components/Category';
import Search from './Components/Search'
import {Logo, Nav} from './Pages/Style'
import {GiKnifeFork} from 'react-icons/gi'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Nav>
      <GiKnifeFork/>
      <Logo to={"/"}>Recipe Hub</Logo>
    </Nav>
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
