import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectCurrentUser } from "../../redux/user/user.selectors";
import {startSignOut} from "../../redux/user/user.actions";
import { selectHidden } from "../../redux/cart/cart.selectors";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { HeaderContainer, LogoContainer, OptionContainer, OptionsContainer } from './header.styles'

const Header = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectHidden);
    return (
        <HeaderContainer>
            <LogoContainer to={'/'}> <Logo/></LogoContainer>
            <OptionsContainer>
                <OptionContainer to={'/shop'}>Shop</OptionContainer>
                <OptionContainer to={'/shop'}>Contact</OptionContainer>
                {
                    currentUser ?
                        <OptionContainer to={'/signin'} onClick={()=> dispatch(startSignOut())}>Sign Out</OptionContainer>
                        :
                        <OptionContainer to={'/signin'}>Sign In</OptionContainer>
                }
                <CartIcon />
            </OptionsContainer>
            { hidden ? '' : <CartDropdown /> }
        </HeaderContainer>
    )
}

export default Header;