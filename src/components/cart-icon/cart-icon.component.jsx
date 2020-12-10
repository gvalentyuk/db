import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { setShowCart } from "../../redux/cart/cart.actions";
import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIconContainer,
} from "./cart-icon.styles";

const CartIcon = () => {
  const itemsCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();
  const dropDownHandler = () => {
    dispatch(setShowCart());
  };
  return (
    <CartIconContainer onClick={() => dropDownHandler()}>
      <ShoppingIconContainer />
      <ItemCountContainer>{itemsCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
