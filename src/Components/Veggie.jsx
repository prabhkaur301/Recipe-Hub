import { React, useState, useEffect } from "react";
import { Wrapper, VeggieCard, Gradient } from "./Styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { Link } from "react-router-dom";
const Veggie = () => {
  const [recipes, setRecipes] = useState([]);
  const getVeggie = async () => {
    //to minimise the API calls
    const check = localStorage.getItem("veggie");
    if (check) {
      setRecipes(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      console.log(data.recipes);
      setRecipes(data.recipes);
    }
  };
  useEffect(() => {
    getVeggie();
  }, []);
  return (
    <Wrapper>
      <h2>Vegetarian Recipes</h2>
      <Splide
        options={{
          perPage: "5",
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "3rem",
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
            <VeggieCard>
              <Link to={`/recipe/${recipe.id}`}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
              </Link>
            </VeggieCard>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
};

export default Veggie;
