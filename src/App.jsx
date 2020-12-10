import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {createStructuredSelector} from "reselect";
import {connect, useDispatch} from 'react-redux'

import {setCurrentUser, checkUserSession} from "./redux/user/user.actions";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.component";
import {selectCurrentUser} from "./redux/user/user.selectors";
import './App.css';

const App = ({currentUser, setCurrentUser}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(checkUserSession())
    }, [dispatch, setCurrentUser])
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/checkout' component={CheckoutPage}/>
                <Route exact path='/signin' render={() => currentUser ? <Redirect to={'/'}/> : <SignInPage/>}/>
            </Switch>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
