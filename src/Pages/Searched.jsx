import { React, useState, useEffect } from "react";
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";
import { Grid, Card, CLink,Box,Back} from "./Style";
import lottie from "lottie-web";
import notFound from "../static/result-not-found.json"

const Searched = () => {
  const [queryData, setQueryData] = useState([]);
  const { term } = useParams();
  const navigate=  useNavigate();
  useEffect(() => {
      const check = localStorage.getItem(`${term}`);
      if (check) {
        setQueryData(JSON.parse(check));
      } else {
        axios
          .get(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${term}&number=20`
          )
          .then((response) => {
            if(!response.data.results){
              localStorage.setItem(
                `${term}`,
                JSON.stringify(response.data.results)
              );
            }
            
            setQueryData(response.data.results);
          })
          .catch((error) => {
            console.log(error);
          });
      }
  },[term]);

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#not-found-animation"),
      animationData: notFound,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
  }, [queryData]);
 

  return (
    <>
    <Grid>
      { queryData.length ? (
        queryData.map((item) => {
          return (
            <Card key={item.id}>
              <CLink to={`/recipe/${item.id}`}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </CLink>
            </Card>
          );
        })
      ) : (
      <Box>
        <div id="not-found-animation" style={{ width: 200, height: 200 }}/>
        <h2 style={{fontFamily:'cursive'}}>Result not found!</h2> 
      </Box>
      )
        
      }
    </Grid>
    < Back onClick={() => navigate(-1)}/>
    </>
  );
};

export default Searched;
