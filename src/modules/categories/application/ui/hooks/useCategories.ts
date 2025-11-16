import { useContext } from "react";
import { CategoryContext } from "../context/useCategories";

export const useCategories = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategories must be used within a CategoryContext");
  }
  return context;
};