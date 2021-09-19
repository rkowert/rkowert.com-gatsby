import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export default function ScreenReadersOnly({ children }) {
  return <Container>{children}</Container>;
}
