import React from 'react'

import { CartItemContainer, ImageContainer, ItemDetailsContainer, NameContainer, PriceContainer } from './cart-item.styles'

const CartItem = ({item}) => {
    const { imageUrl, price, name, quantity } = item
    return (
        <CartItemContainer >
            <ImageContainer src={imageUrl} alt="item"/>
            <ItemDetailsContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>
                    {quantity} X {price}
                </PriceContainer>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem