import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './SigninElements'

const SignIn = () => {
    return (
        <>
        {/* <h1> You looking Signin inside Signin component </h1> */}
        <Container>
            <FormWrap>
                <Icon to='/'> e-data </Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1> Sigin in to your account </FormH1>
                        <FormLabel htmlFor='for'> Email </FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'> Password </FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'> Continue </FormButton>
                        <Text> Forget password </Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default SignIn;