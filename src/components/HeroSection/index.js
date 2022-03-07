import React, {useState} from 'react'
import { Button } from '../ButtonElements'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1 ,HeroP, HeroBtnWrapper, ArrowForward,ArrowRigth } from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () =>{
        setHover(!hover)
    }
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='videos/video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>
             Virtual Bnking Made Easy
            </HeroH1>
            <HeroP>
            Sign up for a new account today and recieve 
            100Pesos in credit towards your
            next paymen.
        </HeroP>
        <HeroBtnWrapper>
            <Button to="signup" 
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'>
                Get started {hover ? <ArrowRigth/> : <ArrowForward />}
            </Button>
        </HeroBtnWrapper>
        </HeroContent>
       
      
    </HeroContainer>
  )
}

export default HeroSection