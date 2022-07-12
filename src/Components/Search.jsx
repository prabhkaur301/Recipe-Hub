import {React,useState} from 'react'
import { StyledForm } from './Styles'
import { FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const [query,setQuery]=useState("");
  const navigate=useNavigate();
  //load new page on search
  const submitHandler=(e)=>{
    e.preventDefault();
    navigate(`/search/${query}`);
  }
  return (
    <>
     <StyledForm onSubmit={submitHandler}>
    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
    <FaSearch/>
   </StyledForm>
  
    </>
  
  )
}

export default Search