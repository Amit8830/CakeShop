import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  return (
    
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'> @ {(new Date().getFullYear())} Copyright Bakeology </SocialLogo>
            <SocialIconLink href='https://www.instagram.com/iam_amit16_/' target='_blank' aria-label='Instagram'>
                  
            <h6 style={{color:"white"}}> Designed By - <span style={{color:"Orange"}}> Amit Gupta</span> </h6>
            </SocialIconLink>
            <SocialIcons>
              <SocialIconLink href='https://www.instagram.com/bakeology_eats_treats/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
             
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/bakeology_eats_treats/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
                <h6 style={{margin:'3px'}}> <span style={{color:"grey"}}>Mahima Madke</span></h6>
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
    
  );
};

export default Footer;
