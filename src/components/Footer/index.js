import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Services</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/signin">Contact</FooterLink>
                <FooterLink to="/signin">Support</FooterLink>
                <FooterLink to="/signin">Destinations</FooterLink>
                <FooterLink to="/signin">Sponsorships</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>


            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to="/signin">Submit Video</FooterLink>
                <FooterLink to="/signin">Ambassadors</FooterLink>
                <FooterLink to="/signin">Agency</FooterLink>
                <FooterLink to="/signin">Influencer</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>Quick Links</FooterLinkTitle>
                <FooterLink to="/signin">Invest</FooterLink>
                <FooterLink to="/signin">Reports</FooterLink>
                <FooterLink to="/signin">News</FooterLink>
                <FooterLink to="/signin">Future</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>



          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/' onClick={toggleHome}>
                dolla
              </SocialLogo>
              <WebsiteRights>
                dolla @ 2021
                All rights reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer
