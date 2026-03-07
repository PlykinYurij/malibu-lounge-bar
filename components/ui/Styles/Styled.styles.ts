import { css } from '@linaria/core';

export const StyledFernLeft = css`
    position: absolute;
    top: -25px;
    left: -10px;
    transform: rotate(40deg);
    
    svg {
        opacity: 0.3;
    }
`;

export const StyledFernRight = css`
    position: absolute;
    top: -25px;
    right: -10px;
    transform: scaleX(-1) rotate(40deg);

    svg {
        opacity: 0.3;
    }
`;
