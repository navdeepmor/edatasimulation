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
    ServicesP,
    Left,
    Right
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
            head : 'MOBILE APP CREATION',
            desc : 'ASP.NET, C# & JAVA, Python, MongoDB Qt, OpenGL, Raphael.JS, WebGL, REST API Communication.'
        }, 
        {
            idx : 1,
            icon : Icon2,
            head : 'Risk & Safety',
            desc : 'Process Design Safety Review, Hazard Identification (HAZID) & Maximum Credible Loss / Consequence Analysis'
        },
        {
            idx : 2,
            icon : Icon3,
            head : 'Quantitative Risk Assessment',
            desc : 'Fire and Gas Mapping, Fire & Explosion Risk Assessment, Consequence Assessment & Gas Dispersion'
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
                <SliderButton onClick={() => handleLeft()}> <Left /> </SliderButton>
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
                <SliderButton onClick={() => handleRight()}> <Right /> </SliderButton>
            </ SliderContainer>
        </ServicesContainer>
    )
}

export default Services;

// import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// import { 
//     ServicesContainer,
//     ServicesH1,
//     SliderButton,
//     SliderContainer,
//     ServicesWrapper,
//     ServicesCard,
//     ServicesIcon,
//     ServicesH2,
//     ServicesP
// } from './ServiceElements'

// const Services = () => {

//     const [idx, setIdx] = useState(1);
//     const [leftIdx, setLeftIdx] = useState(0);
//     const [rightIdx, setRightIdx] = useState(2);
//     const [services, setServices] = useState({});

//     useEffect(() => {
//         getServices();
//     }, [])

//     const mod = (n, m) => {
//         let res = n % m;
//         return res >= 0 ? res : res + m;
//     }

//     const getServices = async () => {
//         let _services = await axios.get('http://localhost:8000/service-info/all-service');
//         setServices([..._services.data]);
//         console.log(_services.data);
//     }

//     const handleLeft = () => {
//         console.log(leftIdx + " " + idx + " " + rightIdx);

//         setIdx(mod(idx - 1, services.length));
//         setLeftIdx(mod(leftIdx - 1, services.length));
//         setRightIdx(mod(rightIdx - 1, services.length));
//     }

//     const handleRight = () => {
//         console.log(leftIdx + " " + idx + " " + rightIdx);

//         setIdx(mod(idx + 1, services.length));
//         setLeftIdx(mod(leftIdx + 1, services.length));
//         setRightIdx(mod(rightIdx + 1, services.length));
//     }

//     return (
//         <ServicesContainer id='services'>
//             <ServicesH1> Our Services </ServicesH1>
//             <SliderContainer>
//                 <SliderButton onClick={() => handleLeft()}> left </SliderButton>
//                 <ServicesWrapper>
//                     <ServicesCard>
//                         <ServicesIcon src={ services[leftIdx].icon } />
//                         <ServicesH2> { services[leftIdx].head } </ServicesH2>
//                         <ServicesP> { services[leftIdx].desc } </ServicesP>
//                     </ServicesCard>
//                     <ServicesCard>
//                         <ServicesIcon src={ services[idx].icon } />
//                         <ServicesH2> { services[idx].head } </ServicesH2>
//                         <ServicesP> { services[idx].desc } </ServicesP>
//                     </ServicesCard>
//                     <ServicesCard>
//                         <ServicesIcon src={ services[rightIdx].icon } />
//                         <ServicesH2> { services[rightIdx].head } </ServicesH2>
//                         <ServicesP> { services[rightIdx].desc } </ServicesP>
//                     </ServicesCard>
//                 </ServicesWrapper>
//                 <SliderButton onClick={() => handleRight()}> right </SliderButton>
//             </ SliderContainer>
//         </ServicesContainer>
//     )
// }

// export default Services;