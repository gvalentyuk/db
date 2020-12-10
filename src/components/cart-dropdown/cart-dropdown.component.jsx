import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { setShowCart } from "../../redux/cart/cart.actions";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  CartDropdownContainer,
  EmptyMesssageContainer,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const items = useSelector(selectCartItems);

  const dropDownHandler = () => {
    dispatch(setShowCart());
  };

  return (
    <CartDropdownContainer>
      {items.length ? (
        items.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <EmptyMesssageContainer>Your cart is empty</EmptyMesssageContainer>
      )}
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dropDownHandler();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
