import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
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
    ImgWrap,
    Img
} from './ServiceInfoElements'

const ServiceInfo = ({
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

    const [service, setService] = useState({});

    const getService = async () => {
        let _service = await axios.get('http://localhost:8000/service-info/');
        setService({..._service.data});
        console.log(_service.data);
    }

    useEffect(() => {
        getService();
    }, [])
    
    return (
        <>
            <InfoContainer lightBg={true} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={true}>
                        <Column1>
                            <TextWrapper>
                                <TopLine> {service.name} </TopLine>
                                <Heading lightText={lightText}> {service.heading} </Heading>
                                <Subtitle darkText={true}> {service.description} </Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default ServiceInfo;