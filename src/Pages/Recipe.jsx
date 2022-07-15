import { React, useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { Info, DetailsWrapper, Button, Col1,Back,SaveIcon } from "./Style";


const Recipe = () => {
  const params = useParams();
  const navigate=useNavigate();
  const [recipeData, setRecipeData] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const fetchData = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const response = await data.json();
    console.log(response);
    setRecipeData(response);
  };

  // const saveData= ()=>{
  //   localStorage.setItem(
  //     "saved",
  //     JSON.stringify(recipeData)
  //   );
  // }
  useEffect(() => {
    fetchData(params.id);
    // saveData();
  }, [params]);

  
  return (
    <>
    <DetailsWrapper>
      <Col1>
        <h2>{recipeData.title}</h2>
        <img src={recipeData.image} alt={recipeData.title} />
        {/* <SaveIcon onClick={saveData}/> */}
      </Col1>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div style={{ marginTop: "1rem" }}>
            <p dangerouslySetInnerHTML={{ __html: recipeData.summary }}></p>
            <h4 style={{ marginTop: "1rem" }}>Instructions:-</h4>
            <p
              dangerouslySetInnerHTML={{ __html: recipeData.instructions }}
            ></p>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {recipeData.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailsWrapper>
    < Back onClick={() => navigate(-1)}/>
    </>
    
  );
};

export default Recipe;
