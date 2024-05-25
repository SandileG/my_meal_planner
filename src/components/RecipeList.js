import React, { useState } from "react";
import SearchBar from "./SearchBar";
import RecipeForm from "./RecipeForm";

const RecipeList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([
    { id: 1, name: "Spaghetti Bolognese" },
    { id: 2, name: "Garlic Chicken Curry" },
    { id: 3, name: "Beef Stroganoff" },
  ]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Recipes</h2>
      <SearchBar onSearch={setSearchQuery} />
      <RecipeForm onSave={addRecipe} />
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
