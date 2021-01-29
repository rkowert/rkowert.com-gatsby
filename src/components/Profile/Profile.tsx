import React from 'react';
import styled from 'styled-components';

import { ProfilePhoto, SocialMediaIcons } from 'components';
import { rhythm } from 'utils/typography';

const ProfilePhotoContainer = styled((props) => <ProfilePhoto {...props} />)`
  border-radius: 50%;
  grid-row: 1 / span 2;
  margin: 0 auto;
  max-width: 14rem;
  align-self: flex-start;

  & img {
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.body.backgroundColor};
    transition: border 0.3s ease-in-out;
  }

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    box-shadow: inset 5px 5px 5px 0px
        ${({ theme }) => theme.body.backgroundColor},
      inset -5px -5px 5px 0px ${({ theme }) => theme.body.backgroundColor},
      inset 5px -5px 5px 0px ${({ theme }) => theme.body.backgroundColor},
      inset -5px 5px 5px 0px ${({ theme }) => theme.body.backgroundColor};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: box-shadow 0.3s ease-in-out;
  }

  @media (min-width: 60em) {
    align-self: center;
    margin: 0 auto ${rhythm(1)};
  }
`;

const SocialMediaIconsContainer = styled.div`
  display: none;

  @media (min-width: 60em) {
    display: block;
  }
`;

interface Props {
  className?: string;
}

export const Profile: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <ProfilePhotoContainer />
      <SocialMediaIconsContainer>
        <SocialMediaIcons />
      </SocialMediaIconsContainer>
    </div>
  );
};
