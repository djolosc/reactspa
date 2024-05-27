import { FC } from "react";

import "./Item.scss";
import FavoriteStarEmpty from "../../assets/icons/FavoriteStarEmpty.svg?react";
import FavoriteStarFull from "../../assets/icons/FavoriteStarFull.svg?react";

interface ItemProps {
  id: string;
  title: string;
  image: string;
  isFavorite: boolean;
  onClick: () => void;
}

const Item: FC<ItemProps> = ({ id, title, isFavorite, onClick, image }) => {
  return (
    <div className="item-wrapper">
      <img src={image} alt="itemImg" />
      <div className="content-wrapper">
        <div className="text-wrapper">
          <h4>{title}</h4>
          <p>{id}</p>
        </div>
      </div>
      <button onClick={onClick}>
        {isFavorite ? (
          <FavoriteStarFull data-testid="starFull" />
        ) : (
          <FavoriteStarEmpty data-testid="starEmpty" />
        )}
      </button>
    </div>
  );
};

export default Item;
