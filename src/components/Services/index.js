import React from 'react'
import Icon1 from '../../images/car1.png';
import Icon2 from '../../images/car1.png';
import Icon3 from '../../images/car1.png';
import { ServicesContainer, ServicesH1, ServicesWrapper, 
    ServicesCard, ServicesIcon, ServicesH2, ServicesP  } from './SerElements'
const Services = () => {
  return (
    <>
        <ServicesContainer>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
              <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Reduce expences</ServicesH2>
                <ServicesP>dsadsadsadsad dsds dsa dsadd dsadsadsads</ServicesP>
              </ServicesCard>
              <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Reduce expences</ServicesH2>
                <ServicesP>dsadsadsadsad dsds dsa dsadd dsadsadsads</ServicesP>
              </ServicesCard>
              <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Reduce expences</ServicesH2>
                <ServicesP>dsadsadsadsad dsds dsa dsadd dsadsadsads</ServicesP>
              </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    </>
  )
}

export default Services