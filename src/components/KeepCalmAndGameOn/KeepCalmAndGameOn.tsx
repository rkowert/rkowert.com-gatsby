import React from 'react';
import styled, { keyframes } from 'styled-components';

import bgImage from './images/keepcalm.png';
import bulletImage from './images/kcago-bullet.png';
import shipImage from './images/kcago-ship.png';

const Container = styled.div`
  /* display: none; */
  position: relative;

  @media (min-width: 48em) {
    display: block;
  }

  & img {
    margin: 0;
  }
`;

const KcagoShip = keyframes`
  0% {
    left: 7.471264368%;
  }

  10% {
    left: 7.471264368%;
  }

  40% {
    left: 74.42528736%;
  }

  50% {
    left: 74.42528736%;
  }

  60% {
    left: 74.42528736%;
  }

  90% {
    left: 7.471264368%;
  }

  100% {
    left: 7.471264368%;
  }
`;

const KcagoBullet = keyframes`
  0% {
    visibility: visible;
    bottom: 10.21194605%;
  }

  19% {
    visibility: visible;
  }

  20% {
    visibility: hidden;
    bottom: 97.68786127%;
    left: 16.09195402%;
  }

  21% {
    visibility: hidden;
    bottom: 10.21194605%;
    left: 83.04597701%;
  }

  50% {
    visibility: hidden;
    bottom: 10.21194605%;
    left: 83.04597701%;
  }

  69% {
    visibility: visible;
  }

  70% {
    visibility: hidden;
    bottom: 97.68786127%;
    left: 83.04597701%;
  }
`;

const Ship = styled.img`
  position: absolute;
  width: 18.67816092%;
  height: 7.707129094%;
  bottom: 5.202312139%;
  left: 7.471264368%;
  z-index: 90;
  animation-name: ${KcagoShip};
  animation-delay: 2s;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const Bullet = styled(Ship)`
  visibility: hidden;
  width: 1.436781609%;
  height: 2.89017341%;
  bottom: 10.21194605%;
  left: 16.09195402%;
  z-index: 80;
  animation-name: ${KcagoBullet};
`;

interface Props {
  className?: string;
}

export default function KeepCalmAndGameOn({ className }: Props) {
  return (
    <Container className={className}>
      <img className="kcago-bg" src={bgImage} alt="Keep Calm and Game On" />
      <Ship src={shipImage} alt="Space ship" />
      <Bullet src={bulletImage} alt="Space ship projectile" />
    </Container>
  );
}
