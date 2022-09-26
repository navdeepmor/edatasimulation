import React from 'react'
import Icon1 from '../../components/assets/images/analysis.svg';
import Icon2 from '../../components/assets/images/drone_surveillance.svg';
import Icon3 from '../../components/assets/images/predictive_analytics.svg';
import { 
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1> Our Services </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2> Reduce expenses </ServicesH2>
                    <ServicesP> We help reduce you with our all in advance tools. </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2> Virtual platform </ServicesH2>
                    <ServicesP> We can access out platform anywhere in the world. </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2> Premium Benefits </ServicesH2>
                    <ServicesP> Unlock our special membership for unlimited consultancy. </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services