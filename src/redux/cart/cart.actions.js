import { cartActionTypes } from "./cart.types";

export const setShowCart = () => ({
    type: cartActionTypes.SET_SHOW_CART
})

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
})

export const subItem = item => ({
    type: cartActionTypes.SUB_ITEM,
    payload: item
})

export const sumItem = item => ({
    type: cartActionTypes.SUM_ITEM,
    payload: item
})

export const clearCart = () => ({
    type: cartActionTypes.CLEAR_CART
})