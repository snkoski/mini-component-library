/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
    background-color: ${COLORS.transparentGray15};
    width: 370px;
`;

const InnerBar = styled.div`
    background-color: ${COLORS.primary};
    border-radius: 4px 0 0 4px;
    height: 100%;
    width: ${(p) => p.value}%;
    ${(p) => p.value === 99.7 && `border-radius: 1px;`}
    ${(p) => p.value === 99.8 && `border-radius: 2px;`}
    ${(p) => p.value === 99.9 && `border-radius: 3px;`}
    ${(p) => p.value === 100 && `border-radius: 4px;`}
`;

const SIZES = {
    small: { 'border-radius': 4 + 'px', height: 8 + 'px' },
    medium: { 'border-radius': 4 + 'px', height: 12 + 'px' },

    large: {
        'border-radius': 8 + 'px',
        height: 24 + 'px',
        padding: 4 + 'px'
    }
};

const ProgressBar = ({ value, size, width }) => {
    const styles = SIZES[size];
    return (
        <Wrapper
            role="progressbar"
            style={styles}
            value={value}
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax="100"
            min="0"
            max="100"
        >
            <VisuallyHidden>{value}%</VisuallyHidden>
            <InnerBar value={value} />
        </Wrapper>
    );
};

export default ProgressBar;
