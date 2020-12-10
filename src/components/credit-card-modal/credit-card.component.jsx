import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReactDOM from "react-dom";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { clearCart } from '../../redux/cart/cart.actions';

import {
  ModalContainer,
  FormContainer,
  DateAndCVCContainer,
  ButtonsContainer,
} from "./credit-card.styles";

const CreditCard = ({hideModal}) => {
  const [cardCredentials, setCardCredentials] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });


  const history = useHistory();
  const dispatch = useDispatch();
  const { cvc, expiry, focus, name, number } = cardCredentials;

  const handleFocus = (event) => {
    setCardCredentials({ ...cardCredentials, focus: event.target.name });
  };

  const submitCard = () => {
      setTimeout(() => {
        dispatch(clearCart());
        hideModal();
        history.push('/');
      }, 1000)
  }

  const handleInput = (event) => {
    const { name, value } = event.target;

    setCardCredentials({ ...cardCredentials, [name]: value });
  };

  const content = (
    <ModalContainer onSubmit = {e => e.preventDefault()}>
      <Cards
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
      />
      <FormContainer>
        <FormInput
          value={number}
          handleChange={handleInput}
          onFocus={handleFocus}
          name="number"
          label="Card number"
        />
        <FormInput
          value={name}
          handleChange={handleInput}
          onFocus={handleFocus}
          name="name"
          label="Name"
        />
        <DateAndCVCContainer>
          <FormInput
            value={expiry}
            handleChange={handleInput}
            onFocus={handleFocus}
            name="expiry"
            label="Valid thru"
          />
          <FormInput
            value={cvc}
            handleChange={handleInput}
            onFocus={handleFocus}
            name="cvc"
            label="CVC"
          />
        </DateAndCVCContainer>
        <ButtonsContainer>
          <CustomButton onClick={ () => submitCard()}>Submit</CustomButton>
          <CustomButton inverted onClick={() => hideModal(false)}>Cancel</CustomButton>
        </ButtonsContainer>
      </FormContainer>
    </ModalContainer>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

export default CreditCard;
