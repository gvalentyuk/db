import React, { useState } from 'react';
import {useDispatch} from "react-redux";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {ButtonsContainer, SignInContainer} from './sign-in.styles'
import { startSignInGoogle, startSignInEmail } from "../../redux/user/user.actions";

const SignIn = () => {
    const dispatch = useDispatch()

    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async event => {
        event.preventDefault();
        dispatch(startSignInEmail(userCredentials))
    };

    const handleChange = event => {
        const {value, name} = event.target;

        setUserCredentials({...userCredentials, [name]: value});
    };
    return (
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={userCredentials.email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={userCredentials.password}
                    handleChange={handleChange}
                    label='password'
                    required
                />
                <ButtonsContainer>
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton type={'button'} onClick={() => dispatch(startSignInGoogle())} signInWithGoogle>Sign in Google</CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
}

export default SignIn;