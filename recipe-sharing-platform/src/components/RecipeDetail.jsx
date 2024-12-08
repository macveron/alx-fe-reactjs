import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipeData = data.find((item) => item.id === parseInt(id));
    setRecipe(recipeData);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-lg">Loading recipe...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">
        Back to Home
      </Link>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-700 text-lg mb-4">{recipe.summary}</p>
        <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc pl-6 mb-4">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {ingredient}
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mb-2">Cooking Instructions:</h2>
        <p className="text-gray-700">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
