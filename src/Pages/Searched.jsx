import { React, useState, useEffect } from "react";
import { useParams,Link} from "react-router-dom";
import { Grid, Card,CLink } from "./Style";

const Searched = () => {
  const [queryData, setQueryData] = useState([]);
  let params = useParams();
  useEffect(() => {
    return () => {
      getSearchData(params.term);
      console.log(params.term);
    };
  }, [params.term]);
  const getSearchData = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=20`
    );
    const response = await data.json();
    setQueryData(response.results);
    console.log(response);
  };
  return (
    <Grid>
      {queryData.map((item) => {
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
  );
};

export default Searched;
