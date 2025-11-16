import { useContext } from "react";
import { TabMenuContext } from "../context/useTabMenu";

export const useTabMenu = () => {
  const context = useContext(TabMenuContext);
  if (!context) {
    throw new Error("useTabMenu must be used within a TabMenuContextProvider");
  }
  return context;
};