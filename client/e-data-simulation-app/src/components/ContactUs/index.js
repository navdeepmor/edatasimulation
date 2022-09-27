import React from 'react'
import { Button } from '../ButtonElements'
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
    Text
} from './ContactUsElements'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper, 
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from '../InfoSection/InfoElements'

const ContactUs = ({
        lightBg, 
        id, 
        imgStart, 
        topLine,
        lightText, 
        headline, 
        darkText, 
        description, 
        buttonLabel, 
        img, 
        alt, 
        primary,
        dark,
        dark2
    }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine> {topLine} </TopLine>
                                <Heading lightText={lightText}> {headline} </Heading>
                                <Subtitle darkText={darkText}> {description} </Subtitle>
                                <BtnWrap>
                                    <Button to='hone' 
                                    smooth={true} 
                                    duration={500}
                                    spy={true}
                                    exact={true}
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}> {buttonLabel} </Button> 
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <FormWrap>
                                <FormContent>
                                    <Form action='#'>
                                        <FormH1> Contact Us </FormH1>
                                        <FormLabel htmlFor='for'> User Name </FormLabel>
                                        <FormInput type='text' required />
                                        <FormLabel htmlFor='for'> Email </FormLabel>
                                        <FormInput type='email' required />
                                        <FormLabel htmlFor='for'> Message </FormLabel>
                                        <TextArea />
                                        <FormButton type='submit'> Continue </FormButton>
                                        <Text> Forget password </Text>
                                    </Form>
                                </FormContent>
                            </FormWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default ContactUs;