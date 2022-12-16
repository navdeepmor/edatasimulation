import React from 'react'
import { useSelector } from 'react-redux'
import * as customeStyle from './ServiceInfoElements'

const ServiceInfo = () => {

    const services = useSelector((state) => {
        state.allServiceInfo
    });
    
    return (
        <>
            <customeStyle.InfoContainer lightBg={true} id={id}>
                <customeStyle.InfoWrapper>
                    <customeStyle.InfoRow imgStart={true}>
                        <customeStyle.Column1>
                            <customeStyle.TextWrapper>
                                <customeStyle.TopLine> {service.name} </customeStyle.TopLine>
                                <customeStyle.Heading lightText={lightText}> {service.heading} </customeStyle.Heading>
                                <customeStyle.Subtitle darkText={true}> {service.description} </customeStyle.Subtitle>
                            </customeStyle.TextWrapper>
                        </customeStyle.Column1>
                        <customeStyle.Column2>
                            <customeStyle.ImgWrap>
                                <customeStyle.Img src={img} alt={alt}/>
                            </customeStyle.ImgWrap>
                        </customeStyle.Column2>
                    </customeStyle.InfoRow>
                </customeStyle.InfoWrapper>
            </customeStyle.InfoContainer>
        </>
    )
}

export default ServiceInfo;