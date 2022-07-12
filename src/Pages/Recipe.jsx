import {React,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import{Info,DetailsWrapper,Button,Col1} from './Style'

const Recipe = () => {
 const params=useParams();
 const [recipeData,setRecipeData]=useState({});
 const [activeTab,setActiveTab]=useState("instructions");
  const fetchData=async()=>{
    const data=await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const response=await data.json();
    console.log(response);
    setRecipeData(response);
  }
  useEffect(()=>{
    fetchData();
  },[params.id]);

  return (
    <DetailsWrapper>
      <Col1>
        <h2>{recipeData.title}</h2>
        <img src={recipeData.image} alt={recipeData.title}/>
      </Col1>
      <Info >
      <Button className={activeTab==='instructions'?'active':""} onClick={()=>setActiveTab("instructions")}>Instructions</Button>
      <Button className={activeTab==='ingredients'?'active':""} onClick={()=>setActiveTab("ingredients")}>Ingredients</Button>
      {
        activeTab==='instructions' &&
        <div style={{marginTop:'1rem'}}>
        <p dangerouslySetInnerHTML={{__html:recipeData.summary}}></p>
        <h4 style={{marginTop:'1rem'}}>Instructions:-</h4>
        <p dangerouslySetInnerHTML={{__html:recipeData.instructions}}></p>
        </div>
      }
     
      {
        activeTab==='ingredients'&&
        <ul>
        {recipeData.extendedIngredients.map((ingredient)=>(
            <li key={ingredient.id}>
            {ingredient.original}
          </li>
        )
        )}
      </ul>
      }
      </Info>
      
    </DetailsWrapper>
  )
}

export default Recipe