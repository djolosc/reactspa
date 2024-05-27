import { useState, FC, ReactNode, useMemo } from "react";

import { AppContext } from "./context";
import { CustomItem } from "./types";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [customItems, setCustomItems] = useState<Array<CustomItem>>([]);

  const toggleFavorite = (id: string) => {
    setCustomItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  const providerValue = useMemo(() => {
    return { customItems, setCustomItems, toggleFavorite };
  }, [customItems]);

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};
