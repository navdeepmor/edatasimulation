import React, { useState } from 'react'
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
    const [services, setServices] = useState({});

    useEffect(() => {
        getServices();
    }, [])

    const mod = (n, m) => {
        let res = n % m;
        return res >= 0 ? res : res + m;
    }

    const getServices = async () => {
        let _services = await axios.get('http://localhost:8000/service-info/all-service');
        setServices([..._services.data]);
        console.log(_services.data);
    }

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