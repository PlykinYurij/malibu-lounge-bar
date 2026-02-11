import { styled } from '@linaria/react';

export const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-s) var(--spacing-m);
  border-bottom: 1px solid rgba(255, 255, 255, .1);
  transition: all ease 0.3s;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
  }
`;

export const NavLinks = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    grid-column: 1 / span 2;
    flex-direction: column;
    justify-items: center;
    width: 100%;
    background: var(--bg);
    padding: ${(props) => (props.isActive ? 'var(--spacing-m) 0' : '0')};
    max-height: ${(props) => (props.isActive ? '500px' : '0')};
    opacity: ${(props) => (props.isActive ? '1' : '0')};
    visibility: ${(props) => (props.isActive ? 'visible' : 'hidden')};
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
  }
`;

export const NavButton = styled.button`
  color: var(--text-main);
  margin-left: var(--spacing-m);
  text-decoration: none;
  transition: all 0.3s;
  background: none;
  border: none;
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;

  &:hover {
    color: var(--neon-blue);
    text-shadow: 0 0 10px var(--neon-blue);
  }
`;

export const NavToggle = styled.div<{isOpen: boolean}>`
  display: none;
  flex-direction: column;
  cursor: pointer;
  transition: all ease 0.3s;

  span {
    height: 3px;
    width: 25px;
    background: var(--text-main);
    margin: var(--spacing-xxs) 0;
    border-radius: 2px;
    transition: all ease 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-self: end;
    transform: rotate(${({isOpen}) => isOpen ? 90 :0 }deg);
  }
`;

export const Logo = styled.img`
  width: 20px;
  overflow: hidden;
  border-radius: 5px;
  object-fit: contain;
`;

export const LogoWrapper = styled.div`
  width: 20px;
  height: 20px;
  overflow: hidden;
  border-radius: 30px;
`;