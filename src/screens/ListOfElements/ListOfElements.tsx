import { useEffect } from "react";
import {
  useCustomItems,
  useSetCustomItems,
  useToggleFavorite,
} from "../../context";
import { useGetItems } from "../../queries/hooks";
import { Item, ScreenTemplate } from "../../components";
import { useHandleScrollAndThrottle, useNavigation } from "../../hooks";

import "./ListOfElements.scss";

const ListOfElementsScreen = () => {
  const { navigateBack } = useNavigation();

  const customItems = useCustomItems();
  const setCustomItems = useSetCustomItems();
  const toggleFavorite = useToggleFavorite();

  const { data, error, fetchNextPage, hasNextPage } = useGetItems();

  useHandleScrollAndThrottle(fetchNextPage);

  const customItemsLength = customItems.length;
  const dataPagesLength = data?.pages.flatMap((item) => item).length;

  useEffect(() => {
    if (
      data?.pages.length &&
      data?.pages.length > 0 &&
      customItemsLength !== dataPagesLength
    ) {
      const items = data.pages[data.pages.length - 1].map((item) => {
        return { ...item, isFavorite: false };
      });
      setCustomItems((previousItems) => [...previousItems, ...items]);
    }
  }, [data?.pages.length, setCustomItems, dataPagesLength, data?.pages]);

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <ScreenTemplate
      title="List of Items"
      onButtonClick={navigateBack}
      buttonTitle="Home"
      contentTitle={`Enjoy the view of your ${customItems.length} items 🎉`}
    >
      <div className="content-wrapper">
        {customItems.length > 0 &&
          customItems.map((item) => {
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
        {!hasNextPage && <h4>That's all folks, no more items</h4>}
      </div>
    </ScreenTemplate>
  );
};

export default ListOfElementsScreen;
