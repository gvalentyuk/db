import React from "react";
import { useDispatch } from "react-redux";

import { removeItem, subItem, sumItem } from "../../redux/cart/cart.actions";
import {
  PriceContainer,
  CheckoutItemContainer,
  NameContainer,
  ImageContainer,
  ArrowContainer,
  QuantityContainer,
  RemoveButtonContainer,
  ValueContainer,
  Image,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, quantity, price } = cartItem;
  const removeItemHamdler = (cartItem) => {
    dispatch(removeItem(cartItem));
  };

  const subItemHandler = (cartItem) => {
    dispatch(subItem(cartItem));
  };

  const sumItemHandler = (cartItem) => {
    dispatch(sumItem(cartItem));
  };
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt="item" />
      </ImageContainer>
      <NameContainer>{name}</NameContainer>
      <QuantityContainer>
        <ArrowContainer onClick={() => subItemHandler(cartItem)}>
          &#10094;
        </ArrowContainer>
        <ValueContainer>{quantity}</ValueContainer>
        <ArrowContainer onClick={() => sumItemHandler(cartItem)}>
          &#10095;
        </ArrowContainer>
      </QuantityContainer>
      <PriceContainer>${price}</PriceContainer>
      <RemoveButtonContainer onClick={() => removeItemHamdler(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
