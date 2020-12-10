import React from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";
import {
  CollectionFooter,
  ImageContainer,
  NameContainer,
  PriceContainer,
  AddButtonContainer,
  CollectionItemContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const addItemHandler = (item) => {
    dispatch(addItem(item));
  };
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer imageUrl={imageUrl} />
      <CollectionFooter>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooter>
      <AddButtonContainer inverted onClick={() => addItemHandler(item)}>
        {" "}
        ADD TO CART{" "}
      </AddButtonContainer>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
