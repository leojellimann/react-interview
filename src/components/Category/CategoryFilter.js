import React from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryFilter } from "../../store/moviesSlice";

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => {
    const uniqueCategories = [
      ...new Set(state.movies.items.map((movie) => movie.category)),
    ];
    return uniqueCategories.map((category) => ({
      value: category,
      label: category,
    }));
  });

  const handleChange = (selectedOptions) => {
    const selectedCategories = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    dispatch(setCategoryFilter(selectedCategories));
  };

  return (
    <Select
      isMulti
      options={categories}
      placeholder="Choisir une catégorie"
      onChange={handleChange}
      className="category-select"
    />
  );
};

export default CategoryFilter;
