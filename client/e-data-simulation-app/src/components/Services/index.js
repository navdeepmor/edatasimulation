import React, { useState } from 'react'
// import { FaMdb } from 'react-icons/fa';
import Icon1 from '../../components/assets/images/analysis.svg';
import Icon2 from '../../components/assets/images/drone_surveillance.svg';
import Icon3 from '../../components/assets/images/predictive_analytics.svg';
import { 
    ServicesContainer,
    ServicesH1,
    SliderButton,
    SliderContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'

const Services = () => {

    const [idx, setIdx] = useState(1);
    const [leftIdx, setLeftIdx] = useState(0);
    const [rightIdx, setRightIdx] = useState(2);

    const mod = (n, m) => {
        let res = n % m;
        return res >= 0 ? res : res + m;
    }

    const services = [
        {
            idx : 0, 
            icon : Icon1,
            head : 'CRASH',
            desc : 'We let you know the depth & figure involed in crash.'
        }, 
        {
            idx : 1,
            icon : Icon2,
            head : 'CFD',
            desc : 'Our CFD is know in industry with unique methods which we adopte.'
        },
        {
            idx : 2,
            icon : Icon3,
            head : 'MBD',
            desc : 'Check our client speaks about our expertise in MBD.'
        },
        {
            idx : 3,
            icon : Icon3,
            head : 'Service-4',
            desc : 'Click on it to know more about our service 4.'
        },
        {
            idx : 4,
            icon : Icon3,
            head : 'Service-5',
            desc : 'Click on it to know more about our service 5.'
        }
    ]

    const handleLeft = () => {
        console.log(leftIdx + " " + idx + " " + rightIdx);

        setIdx(mod(idx - 1, services.length));
        setLeftIdx(mod(leftIdx - 1, services.length));
        setRightIdx(mod(rightIdx - 1, services.length));
    }

    const handleRight = () => {
        console.log(leftIdx + " " + idx + " " + rightIdx);

        setIdx(mod(idx + 1, services.length));
        setLeftIdx(mod(leftIdx + 1, services.length));
        setRightIdx(mod(rightIdx + 1, services.length));
    }

    return (
        <ServicesContainer id='services'>
            <ServicesH1> Our Services </ServicesH1>
            <SliderContainer>
                <SliderButton onClick={() => handleLeft()}> left </SliderButton>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={ services[leftIdx].icon } />
                        <ServicesH2> { services[leftIdx].head } </ServicesH2>
                        <ServicesP> { services[leftIdx].desc } </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={ services[idx].icon } />
                        <ServicesH2> { services[idx].head } </ServicesH2>
                        <ServicesP> { services[idx].desc } </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={ services[rightIdx].icon } />
                        <ServicesH2> { services[rightIdx].head } </ServicesH2>
                        <ServicesP> { services[rightIdx].desc } </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
                <SliderButton onClick={() => handleRight()}> right </SliderButton>
            </ SliderContainer>
        </ServicesContainer>
    )
}

export default Services