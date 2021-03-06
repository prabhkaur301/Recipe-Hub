import { React, useState, useEffect } from "react";
import { Wrapper, Card, Gradient } from "./Styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { Link } from "react-router-dom";
const Popular = () => {
  const [recipes, setRecipes] = useState([]);
  const getPopular = async () => {
    //to minimise the API calls
    const check = localStorage.getItem("popular");
    if (check) {
      setRecipes(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      console.log(data.recipes);
      setRecipes(data.recipes);
    }
  };
  useEffect(() => {
    getPopular();
  }, []);

  return (
    <Wrapper>
      <h2>Trending Recipes</h2>
      <Splide
        options={{
          perPage: "4",
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "4rem",
          breakpoints: {
            640: {
              perPage: 2,
              gap    : '.7rem',
              height : '6rem',
            },
            480: {
              perPage: 1,
              gap    : '.7rem',
              height : 'auto',
              pagination:true,
            },
          },
        }}
      >
        {recipes.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Card>
              <Link to={`/recipe/${recipe.id}`}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
};

export default Popular;
