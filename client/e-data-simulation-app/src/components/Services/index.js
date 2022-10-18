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
                    <ServicesH2> EV </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2> CAD </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2> STRENGTH/DURABILITY </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2> THERMAL </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2> CFD </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2> NVH </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2> CRASH </ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2> MBD </ServicesH2>
                    {/* <ServicesP> Unlock our special membership for unlimited consultancy. </ServicesP> */}
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services