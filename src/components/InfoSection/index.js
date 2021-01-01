import React from 'react'
import image from '../../images/svg-1.svg'
import image3 from '../../images/svg-3.svg'
import image4 from '../../images/svg-4.svg'
import { Button } from '../ButtonElement'
import { Column2, ImagWrap, Img, InfoContainer, InfoWrapper, InfoRow, Column1, TopLine, TextWrapper, Heading, Subtitle, BtnWrap, } from './infoElements'

const InfoSection = ({ lightBg, lightText, topLine, id, headLine, darkText, description, buttonLabel, img, alt, imgStart, primary, dark, dark2 }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        {console.log(id)}
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText} > {headLine}</Heading>
                <Subtitle darkText={darkText} >{description}</Subtitle>
                <BtnWrap>
                  <Button to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}>

                    {buttonLabel}
                  </Button>

                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImagWrap>
                {
                  (id === 'about') && (
                    <Img
                      src={image}
                      alt={'car'} />
                  )

                }
                {
                  (id === 'discover') && (
                    <Img
                      src={image3}
                      alt={'car'} />
                  )

                }
                {
                  (id === 'signup') && (
                    <Img
                      src={image4}
                      alt={'car'} />
                  )

                }

                {/* not working */}
                {/* <Img src={require('../../images/svg-1.svg')} /> */}

              </ImagWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
