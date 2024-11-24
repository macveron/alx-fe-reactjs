import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  // Action to add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Action to update a recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Action to delete a recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Action to initialize or set the recipe list
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
}));

export default useRecipeStore;
