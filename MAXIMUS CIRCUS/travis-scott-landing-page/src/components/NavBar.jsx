import React from 'react';
import styled from '@emotion/styled';

const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1.2rem;

  &:hover {
    color: #ff4500;
  }
`;

const NavBar = () => (
  <NavBarContainer>
    <NavLink href="#" target="_blank" rel="noopener noreferrer">Início</NavLink>
    <NavLink href="https://shop.travisscott.com/" target="_blank" rel="noopener noreferrer">Cactus Jack</NavLink>
    <NavLink href="https://www.ticketmaster.com.br/event/travis-scott" target="_blank" rel="noopener noreferrer">Tour Maximus Circus</NavLink>
    <NavLink href="https://open.spotify.com/intl-pt/album/18NOKLkZETa4sWwLMIm0UZ?si=Mjwa9kl8STqy4BOjfgwi3A" target="_blank" rel="noopener noreferrer">Utopia</NavLink>
  </NavBarContainer>
);

export default NavBar;