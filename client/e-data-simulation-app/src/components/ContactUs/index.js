import React, {useState} from 'react'
import axios from 'axios'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    TextArea,
    FormButton,
    // Text
} from './ContactUsElements'

const SignIn = () => {

    const [fname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    // const [error, setError] = useState('');

    const handleSendEmail = async (e) => {
        try {
            let resp = await axios.post('http://localhost:3000/', {fname, email, msg }); 
            console.log('resp ', resp);
        } catch(err) {
            // error handling
        }
        e.preventDefault();
    }

    return (
        <>
        {/* <h1> You looking Signin inside Signin component </h1> */}
        <Container>
            <FormWrap>
                <Icon to='/'> e-data </Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1> Contact Us </FormH1>
                        <FormLabel htmlFor='for'> Full Name </FormLabel>
                        <FormInput type='text' required value={fname} onChange={(e) => setName(e.target.value)}/>
                        <FormLabel htmlFor='for'> Email </FormLabel>
                        <FormInput type='email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <FormLabel htmlFor='for'> Message </FormLabel>
                        <TextArea value={msg} onChange={(e) => setMsg(e.target.value)}/>
                        <FormButton type='click' onClick={handleSendEmail}> Submit </FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default SignIn;