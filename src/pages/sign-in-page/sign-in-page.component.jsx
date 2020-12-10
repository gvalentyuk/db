import React from 'react'

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { SignInAndSignUpContainer } from './sign-in-page.styles'

const SignInPage = () => {
    return (
        <SignInAndSignUpContainer>
            <SignIn />
            <SignUp />
        </SignInAndSignUpContainer>
    )
}

export default SignInPage