import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: block;
    padding: ${props => props.theme.noSpacing ? '0' : '0 20px'};

    p {
        font-size: 24px;
        color: black;
        font-weight: 500;
        line-height: 1.5;
        margin: 0 auto;
        max-width: 768px;
        position: relative;
        text-align: center;
        z-index: 1;

        @media (max-width: 768px) {
            font-size: 18px;
        }
    }
`;

const SectionByline = ({noSpacing, text}) => {
    return (
        <Container theme={{noSpacing}}>
            <p>{text}</p>
        </Container>
    );
};

export default SectionByline;
