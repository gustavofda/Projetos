import React from 'react';
import styled from '@emotion/styled';

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/background.jpeg');
  background-size: cover;
  background-position: center;
  z-index: -1; /* Para garantir que a imagem fique atrás do texto */
`;

const Background = () => (
  <BackgroundImage />
);

export default Background;
