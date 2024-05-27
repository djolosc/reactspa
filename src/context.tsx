import { createContext, useContext } from "react";
import { CustomItem } from "./types";

interface AppContextType {
  customItems: Array<CustomItem>;
  setCustomItems: React.Dispatch<React.SetStateAction<CustomItem[]>>;
  toggleFavorite: (id: string) => void;
}

export const AppContext = createContext<AppContextType>({
  customItems: [],
  setCustomItems: () => null,
  toggleFavorite: () => null,
});

const useAppContext = () => useContext(AppContext);

export const useCustomItems = () => useAppContext().customItems;
export const useSetCustomItems = () => useAppContext().setCustomItems;
export const useToggleFavorite = () => useAppContext().toggleFavorite;
