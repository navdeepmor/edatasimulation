import React, { useState } from 'react'
import Video from '../assets/videos/video2.mp4'
import { Button } from '../ButtonElements'
import {
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1,
    HeroP, 
    HeroBtnWrapper, 
    PhoneRing
    // ArrowForward, 
    // ArrowRight
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1> Make Real World Simulation with edata simulation </HeroH1>
                <HeroP> 
                    You can contact us at below number & get consultation with renowned experts in Mechanical filed. 
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to='/contactus' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover} 
                        primary='true' 
                        dark='true'
                        smooth={true}
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}>
                        +91 9711421875 {hover ? '' : <PhoneRing />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;