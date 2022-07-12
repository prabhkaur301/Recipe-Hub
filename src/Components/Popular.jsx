import {React,useState,useEffect} from 'react'
import {Wrapper,Card,Gradient} from './Styles'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { Link } from 'react-router-dom';
const Popular = () => {
    const [recipes,setRecipes]=useState([]);
    const getPopular= async ()=>{
        //to minimise the API calls
        const check=localStorage.getItem('popular');
        if(check){
            setRecipes(JSON.parse(check));
        }
        else{
            const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
            const data=await api.json();
            localStorage.setItem('popular',JSON.stringify(data.recipes))
            console.log(data.recipes);
            setRecipes(data.recipes);

        }
        

    }
    useEffect(()=>{
        getPopular();
    },[])

  return (
    <Wrapper>
        <h2>Trending Recipes</h2>
        <Splide options={
            {
                perPage:'4',
                arrows:false,
                pagination:false,
                drag:'free',
                gap:'4rem',
            }
        } >
        {
             recipes.map((recipe)=>(
                <SplideSlide key={recipe.id}>
                <Card>
                    <Link to={`/recipe/${recipe.id}`}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title}/>
                    <Gradient />
                    </Link>
                </Card>
                </SplideSlide>
            ))
        }
        </Splide>
    </Wrapper>
  )
}
// const Wrapper=styled.div`
// margin: 4rem 0rem;`

// const Card=styled.div`
// min-height:16rem;
// border-radius:20px;
// position:relative;

// img{
//     width:100%;
//     height:100%;
//     object-fit:cover;
//     border-radius:20px;
//     position:absolute;
// }
// p{
//     position:absolute;
//     left:50%;
//     bottom:5%;
//     z-index:10;
//     transform:translate(-50%,-5%);
//     color:white;
//     font-weight:bold;
//     font-size:1rem;
//     text-align:center;
// }
// `
// const Gradient=styled.div`
// z-index:3;
// position:absolute;
// width:100%;
// height:100%;
// border-radius:20px;
// background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.7))`


export default Popular