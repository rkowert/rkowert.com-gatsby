import React, { useState } from 'react';
import styled from 'styled-components';

import moogle1 from './images/moogle1.png';
import moogle2 from './images/moogle2.png';
import moogle3 from './images/moogle3.png';
import moogle4 from './images/moogle4.png';
import moogle5 from './images/moogle5.png';
import moogle6 from './images/moogle6.png';
import moogle7 from './images/moogle7.png';
import moogle8 from './images/moogle8.png';
import moogle9 from './images/moogle9.png';

const Moogle = styled.div`
  position: fixed;
  z-index: 10000;
  outline: 0;
`;

const images = [
  moogle1,
  moogle2,
  moogle3,
  moogle4,
  moogle5,
  moogle6,
  moogle7,
  moogle8,
  moogle9,
];

interface Props {
  index: number;
  left: string;
  mirrored?: boolean;
  onClick(): void;
  top: string;
}

export default function({
  index,
  left,
  mirrored = false,
  onClick,
  top,
}: Props) {
  const [hovered, setHovered] = useState(false);
  const style = {
    left,
    top,
    transform: '',
  };
  if (mirrored) {
    style.transform = 'scaleX(-1)';
  }
  if (hovered) {
    const size = 1 + Math.floor(Math.random() * 10) / 100;
    const scaleX = (mirrored ? -1 : 1) * size;
    const angle = Math.floor(Math.random() * 20 - 10);
    style.transform = `rotate(${angle}deg) scale(${scaleX},${size})`;
  } else {
    const size = 0.9 + Math.floor(Math.random() * 10) / 100;
    const scaleX = (mirrored ? -1 : 1) * size;
    const angle = Math.floor(Math.random() * 6 - 3);
    style.transform = `rotate(${angle}deg) scale(${scaleX},${size})`;
  }

  function toggleHover() {
    setHovered(!hovered);
  }

  return (
    <Moogle
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={onClick}
      style={style}
    >
      <img src={images[index]} />
    </Moogle>
  );
}
