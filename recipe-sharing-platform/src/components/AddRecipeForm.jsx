import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required.';
    }

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    } else if (formData.ingredients.split(',').length < 2) {
      newErrors.ingredients = 'Please list at least two ingredients, separated by commas.';
    }

    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear individual field errors on input change
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log('Submitted Recipe:', formData);
      alert('Recipe added successfully!');

      // Reset form
      setFormData({ title: '', ingredients: '', steps: '' });
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div>
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:ring ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter the recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>
        <div>
          <label htmlFor="ingredients" className="block text-gray-700 font-medium mb-2">Ingredients (comma-separated)</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:ring ${
              errors.ingredients ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="E.g., Flour, Sugar, Eggs"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>
        <div>
          <label htmlFor="steps" className="block text-gray-700 font-medium mb-2">Preparation Steps</label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:ring ${
              errors.steps ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Describe the preparation steps"
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
