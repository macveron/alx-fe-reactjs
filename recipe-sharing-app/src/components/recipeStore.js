import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a recipe
  addRecipe: (newRecipe) => 
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Delete a recipe by ID
  deleteRecipe: (id) => 
    set((state) => ({ recipes: state.recipes.filter((recipe) => recipe.id !== id) })),

  // Update a recipe by ID
  updateRecipe: (updatedRecipe) => 
    set((state) => ({
      recipes: state.recipes.map((recipe) => 
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
}));

export default useRecipeStore;
