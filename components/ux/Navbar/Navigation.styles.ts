import { styled } from '@linaria/react';
import { Flex } from '@ui';

export const StyledNav = styled.nav<{ isOpen: boolean }>`
    position: fixed;
    width: 100%;
    top: 0;
    opacity: ${({ isOpen }) => (isOpen ? 0.95 : 0.8)};
    z-index: 100;
    min-height: ${({ isOpen }) => (isOpen ? '100dvh' : '20px')};
    background: var(--bg);
    padding: var(--spacing-m) var(--spacing-m);
    border-bottom: 1px solid rgba(255, 255, 255, .1);
    transition: all ease 0.3s;
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

export const NavToggle = styled.div<{ isOpen: boolean }>`
    cursor: pointer;
    transition: all ease 0.3s;
`;

export const Logo = styled.img`
    width: 2rem;
    overflow: hidden;
    border-radius: 5px;
    object-fit: contain;
`;

export const LogoContainer = styled.div`
    width: 2rem;
    height: 2rem;
    overflow: hidden;
    border-radius: 30px;
`;

export const LogoWrapper = styled(Flex)`
    cursor: pointer;
`;
