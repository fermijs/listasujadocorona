import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    align-items: center;
    border: 3px solid #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
    padding: 40px 20px;
`;

const Title = styled.h3`
    color: black;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
`;

const BorderedCard = ({ text, children }) => {
    return (
        <Wrapper>
            <Title>
                { text }
            </Title>
            <div>
                { children }
            </div>
        </Wrapper>
    );
};

export default BorderedCard;
