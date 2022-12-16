import React, { useState } from 'react'
import axios from 'axios'
import emailSentImgSrc from '../assets/images/email-sent-1.svg';
import {
    MsgSentCont,
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
    const [contactNum, setContactNum] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [msgSend, setMsgSend] = useState(false);
    // const [error, setError] = useState('');

    const handleSendEmail = async (e) => {
        try {
            let resp = await axios.post('http://localhost:8000/send-email/', {fname, contactNum, email, msg}); 
            console.log(resp);
            if(resp.status === 200) {
                setMsgSend(true);
            }
        } catch(err) {
            // error handling
        }
        e.preventDefault();
    }

    return (
        <>
        {
            msgSend ? (<MsgSentCont> <img src={emailSentImgSrc} alt='Message have been sent.' /> </MsgSentCont>) :
            (<Container>
                <FormWrap>
                    <Icon to='/'> e-data </Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1> Contact Us </FormH1>
                            <FormLabel htmlFor='for'> Full Name </FormLabel>
                            <FormInput type='text' required value={fname} onChange={(e) => setName(e.target.value)}/>
                            <FormLabel htmlFor='for'> Contact No. </FormLabel>
                            <FormInput type='text' required value={contactNum} onChange={(e) => setContactNum(e.target.value)}/>
                            <FormLabel htmlFor='for'> Email </FormLabel>
                            <FormInput type='email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <FormLabel htmlFor='for'> Message </FormLabel>
                            <TextArea value={msg} onChange={(e) => setMsg(e.target.value)}/>
                            <FormButton type='click' onClick={(e) => handleSendEmail(e)}> Submit </FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>)
        }
        </>
    )
}

export default SignIn;