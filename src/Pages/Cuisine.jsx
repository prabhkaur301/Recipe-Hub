import {React,useState,useEffect} from "react";
import {Card,Grid,CLink} from "./Style"
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
  const [cuisineData,setCuisineData]=useState([]);
  let params=useParams();
  useEffect(() => {
    return () => {
      console.log("I triggered")
      getCuisins(params.type)
      console.log(params.type)
    };
  }, [params.type])
  const getCuisins = async (name) => {
  const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=50`
    );
    const response = await data.json();
    setCuisineData(response.results)
    console.log(response);
  };
  

  return(
    <Grid>
      {cuisineData.map((item)=>{
        return(
         
          <Card key={item.id}>
             <CLink to={`/recipe/${item.id}`}>
            <img src={item.image} alt={item.title}/>
            <h4>{item.title}</h4>
            </CLink>
          </Card>
        )
      })}
    </Grid>
  )
};

export default Cuisine;
