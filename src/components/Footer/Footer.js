import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  SocialIconText
} from './Footer.elements';

function Footer() {

  const date = new Date();

  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            FULDOSE
          </SocialLogo>
          <SocialIcons>
            <SocialIconLink href='tel:+918950253211' target='_blank' aria-label='Facebook'>
              <FaPhone/>
              <SocialIconText>+91 89502 53211</SocialIconText>
              <SocialIconText>+91 74172 04257</SocialIconText>
            </SocialIconLink>
            
            
            <SocialIconLink href='mailto:fuldozzer@gmail.com' aria-label='Facebook'>
              <FaEnvelope/>
              <SocialIconText>fuldozzer@gmail.com</SocialIconText>
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;