import React, {useState} from "react";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectTotalCartCost,
} from "../../redux/cart/cart.selectors";

import CustomButton from "../../components/custom-button/custom-button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import CreditCard from '../../components/credit-card-modal/credit-card.component';
import {
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  HeaderBlockContainer,
  TotalContainer,
  EmptyMessageContainer,
  CheckoutOptions,
} from "./checkout.styles";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectTotalCartCost);

  const [showModal, setShowModal] = useState(false);

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>

      {!cartItems.length ? (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      ) : (
        cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      )}

      <CheckoutOptions>
        {cartItems.length ? (
          <>
            <CustomButton onClick={() => setShowModal(true)}>Pay</CustomButton>
            <TotalContainer>TOTAL: ${total}</TotalContainer>
          </>
        ) : (
          ""
        )}
      </CheckoutOptions>
      {showModal &&  <CreditCard hideModal={setShowModal} />}
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
