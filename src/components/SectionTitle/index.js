import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: block;
    padding: 40px 20px 20px;

    h2 {
        font-size: 48px;
        color: black;
        font-weight: 700;
        position: relative;
        text-align: center;
        z-index: 1;

        @media (max-width: 768px) {
            font-size: 32px;
        }
    }
`;

const SectionTitle = props => {
    return (
        <Container>
            <h2>{props.text}</h2>
        </Container>
    );
};

export default SectionTitle;
