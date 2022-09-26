import React, { useState } from 'react'
import Video from '../../components/assets/videos/video2.mp4'
import { Button } from '../ButtonElements'
import {
    BannerContainer, 
    BannerBg, 
    VideoBg, 
    BannerContent, 
    BannerH1,
    BannerP, 
    BannerBtnWrapper, 
    ArrowForward, 
    ArrowRight
} from './BannerElements'


const Banner = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <BannerContainer id='home'>
            <BannerBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </BannerBg>
            <BannerContent>
                <BannerH1> Make Real World Simulation with e-data-simulation </BannerH1>
                <BannerP> 
                    Sign up for a new account & get your first free consultation with renowned Scientists. 
                </BannerP>
                <BannerBtnWrapper>
                    <Button 
                        to='/signup' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover} 
                        primary='true' 
                        dark='true'
                        smooth={true}
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}>
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </BannerBtnWrapper>
            </BannerContent>
        </BannerContainer>
    )
}

export default Banner;