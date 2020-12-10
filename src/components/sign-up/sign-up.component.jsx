import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {startSignUp} from "../../redux/user/user.actions";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {TitleContainer, SignUpContainer} from './sign-up.styles'

const SignUp = () => {
    const dispatch = useDispatch()
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = userCredentials;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        dispatch(startSignUp({email, password, displayName}))

        setUserCredentials({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    const handleChange = event => {
        const {name, value} = event.target;

        setUserCredentials({...userCredentials, [name]: value});
    };

    const {displayName, email, password, confirmPassword} = userCredentials;
    return (
        <SignUpContainer>
            <TitleContainer>I do not have a account</TitleContainer>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    );
}

export default SignUp;