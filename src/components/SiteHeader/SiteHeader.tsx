import { Link } from 'gatsby';
import * as React from 'react';
import Headroom from 'react-headroom';
import styled from 'styled-components';

import { ScreenReadersOnly } from 'components';
import { ReactComponent as LogoImage } from 'images/logos/logo.svg';
import { ReactComponent as LogoTextImage } from 'images/logos/logo-text.svg';
import { rhythm } from 'utils/typography';

import Navigation from './Navigation';

interface NavLinks {
  name: string;
  link: string;
}

interface Props {
  navLinks?: NavLinks[];
  siteTitle?: string;
}

const Header = styled.header`
  align-items: center;
  background: ${props => props.theme.header.backgroundColor};
  box-shadow: 0 3px 10px -5px ${props => props.theme.header.boxShadowColor};
  display: flex;
  padding: ${rhythm(1 / 2)} ${rhythm(1)};
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
`;

const Logo = styled.h1`
  flex: 1;
  margin: 0;
  padding: 0;

  & a {
    align-items: center;
    display: flex;
  }

  & img {
    margin-bottom: 0;
  }
`;

const StyledLogoImage = styled(LogoImage)`
  margin-right: 1rem;
  width: 2.5rem;

  & .cls-1 {
    fill: ${props => props.theme.header.logoFill};
    transition: fill 0.3s ease-in-out;
  }

  & .cls-2 {
    fill: ${props => props.theme.header.logoFill2};
    transition: fill 0.3s ease-in-out;
  }
`;

const StyledLogoTextImage = styled(LogoTextImage)`
  width: 13rem;

  & .cls-1 {
    fill: ${props => props.theme.header.logoFill};
    transition: fill 0.3s ease-in-out;
  }
`;

const LogoLink = styled(Link)`
  &:hover {
    ${StyledLogoImage} {
      & .cls-1 {
        fill: ${props => props.theme.header.logoHoverFill};
      }

      & .cls-2 {
        fill: ${props => props.theme.header.logoHoverFill2};
      }
    }

    ${StyledLogoTextImage} {
      & .cls-1 {
        fill: ${props => props.theme.header.logoHoverFill};
      }
    }
  }
`;

const NavigationContainer = styled.div`
  @media (${props => props.theme.media.expandedNav}) {
    flex: 1;
  }
`;

export default ({ navLinks, siteTitle = '' }: Props) => (
  <Headroom disableInlineStyles>
    <Header role="header">
      <Logo>
        <LogoLink to="/">
          <StyledLogoImage />
          <StyledLogoTextImage aria-hidden="true" />
          <ScreenReadersOnly>{siteTitle}</ScreenReadersOnly>
        </LogoLink>
      </Logo>
      <NavigationContainer>
        <Navigation navLinks={navLinks} />
      </NavigationContainer>
    </Header>
  </Headroom>
);
