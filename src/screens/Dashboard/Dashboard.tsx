import { useToggleFavorite, useCustomItems } from "../../context";
import { Item, ScreenTemplate } from "../../components";
import { useMemo } from "react";
import { useNavigation } from "../../hooks";

const DashboardScreen = () => {
  const { navigateToTheList } = useNavigation();
  const customItems = useCustomItems();
  const toggleFavorite = useToggleFavorite();

  const favoriteItems = useMemo(() => {
    return customItems.filter((item) => item.isFavorite);
  }, [customItems]);

  return (
    <ScreenTemplate
      title={"Home"}
      onButtonClick={navigateToTheList}
      buttonTitle={"List of Items"}
      contentTitle={
        favoriteItems.length > 0
          ? "Here are your favorite items 🤩"
          : "You haven't yet selected any favorite item 🥹"
      }
    >
      <div className="content-wrapper">
        {favoriteItems.length > 0 &&
          favoriteItems.map((item) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.thumbnailUrl}
                onClick={() => toggleFavorite(item.id)}
                isFavorite={item.isFavorite}
              />
            );
          })}
      </div>
    </ScreenTemplate>
  );
};

export default DashboardScreen;
