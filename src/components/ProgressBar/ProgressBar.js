/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
    background-color: ${COLORS.transparentGray15};
    border-radius: var(--radius);
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    padding: var(--padding);
    width: 370px;
`;

const BarWrapper = styled.div`
    border-radius: 4px;
    /* Trim off corners when progress bar is near full */
    overflow: hidden;
`;

const InnerBar = styled.div`
    background-color: ${COLORS.primary};
    height: var(--height);
    width: var(--width);
`;

const STYLES = {
    small: { radius: 4, height: 8, padding: 0 },
    medium: { radius: 4, height: 12, padding: 0 },
    large: {
        radius: 8,
        height: 16,
        padding: 4
    }
};

const ProgressBar = ({ value, size }) => {
    const styles = STYLES[size];

    if (!styles) {
        throw new Error(`Unknown size passed to ProgressBar: ${size}`);
    }
    return (
        <Wrapper
            role="progressbar"
            style={{
                '--padding': styles.padding + 'px',
                '--radius': styles.radius + 'px'
            }}
            value={value}
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax="100"
            min="0"
            max="100"
        >
            <VisuallyHidden>{value}%</VisuallyHidden>
            <BarWrapper>
                <InnerBar
                    value={value}
                    style={{
                        '--height': styles.height + 'px',
                        '--width': value + '%'
                    }}
                />
            </BarWrapper>
        </Wrapper>
    );
};

export default ProgressBar;
