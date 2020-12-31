import React from 'react'
import { Button } from '../ButtonElement'
import { Column2, ImagWrap, Img, InfoContainer, InfoWrapper, InfoRow, Column1, TopLine, TextWrapper, Heading, Subtitle, BtnWrap, } from './infoElements'

const InfoSection = ({ lightBg, lightText, topLine, id, headLine, darkText, description, buttonLabel, img, alt, imgStart }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText} > {headLine}</Heading>
                <Subtitle darkText={darkText} >{description}</Subtitle>
                <BtnWrap>
                  <Button to='home' >
                    {buttonLabel}
                  </Button>

                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImagWrap>
                <Img src={img} alt={alt}>
                </Img>
              </ImagWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
