import { React, useState, useEffect } from "react";
import { Card, Grid, CLink,Back} from "./Style";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

const Cuisine = () => {
  const [cuisineData, setCuisineData] = useState([]);
  let { type } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    
    const check = localStorage.getItem(`${type}`);
    if (check) {
      setCuisineData(JSON.parse(check));
    } else {
      axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${type}&number=20&random`
        )
        .then((response) => {
          localStorage.setItem(
            `${type}`,
            JSON.stringify(response.data.results)
          );
          setCuisineData(response.data.results);
          console.log(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [type]);

  return (
   <>
    <Grid>
      {cuisineData.map((item) => {
        return (
          <Card key={item.id}>
            <CLink to={`/recipe/${item.id}`}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </CLink>
          </Card>
        );
      })}
      
    </Grid>
    < Back onClick={() => navigate(-1)}/>
    </>
    
    
  );
};

export default Cuisine;
