import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import {
    ShowContainer, 
    ShowBg, 
    VideoBg, 
    ShowContent, 
    ShowH1, 
    ShowP, 
    ShowBtnWrapper, 
    ArrowForward, 
    ArrowRight
} from './ShowWorkElements'


const ShowWork = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <ShowContainer>
            <ShowBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </ShowBg>
            <ShowContent>
                <ShowH1> Make Real World Simulation with e-data-simulation </ShowH1>
                <ShowP> 
                    Sign up for a new account & get you first free consultation with renowned Scientists. 
                </ShowP>
                <ShowBtnWrapper>
                    <Button 
                        to='/signup' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover} 
                        primary='true' 
                        dark='true'>
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </ShowBtnWrapper>
            </ShowContent>
        </ShowContainer>
    )
}

export default ShowWork;