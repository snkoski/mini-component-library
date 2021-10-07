import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
    const styles = STYLES[size];

    if (!styles) {
        throw new Error(`Unknown size passed to ProgressBar: ${size}`);
    }

    return (
        <Wrapper>
            <VisuallyHidden>{label}</VisuallyHidden>
            <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
                <Icon
                    id={icon}
                    size={styles.iconSize}
                    strokeWidth={styles.stroke}
                />
            </IconWrapper>
            <TextInput
                type="text"
                {...delegated}
                style={{
                    '--width': width + 'px',
                    '--border-thickness': styles.borderThickness + 'px',
                    '--height': styles.height / 16 + 'rem',
                    '--font-size': styles.fontSize / 16 + 'rem'
                }}
            ></TextInput>
        </Wrapper>
    );
};

const STYLES = {
    small: {
        borderThickness: 1,
        height: 24,
        fontSize: 14,
        iconSize: 16,
        stroke: 1
    },
    large: {
        borderThickness: 2,
        height: 36,
        fontSize: 18,
        iconSize: 24,
        stroke: 2
    }
};

const Wrapper = styled.label`
    display: block;
    position: relative;
    color: ${COLORS.gray700};

    &:hover {
        color: ${COLORS.black};
    }
`;

const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto 0;
    height: var(--size);
`;

const TextInput = styled.input`
    /* Use rem so input height will scale with default font-size of browser */
    height: var(--height);
    width: var(--width);
    border: none;
    border-bottom: var(--border-thickness) solid ${COLORS.black};
    padding-left: var(--height);
    color: inherit;
    font-weight: 700;
    outline-offset: 2px;
    font-size: var(--font-size);

    &::placeholder {
        color: ${COLORS.gray500};
        font-weight: 400;
    }
`;
export default IconInput;
