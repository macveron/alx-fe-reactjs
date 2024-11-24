import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  const isFavorited = favorites.includes(recipeId);

  const handleClick = () => {
    if (isFavorited) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button onClick={handleClick} style={{ marginLeft: '10px' }}>
      {isFavorited ? 'Unfavorite' : 'Favorite'}
    </button>
  );
};

export default FavoriteButton;
