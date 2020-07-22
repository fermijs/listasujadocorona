import React from 'react';
import styled from 'styled-components';
import { estados } from '../../constants/estados';

const Wrapper = styled.div`
    display: block;
    margin: 0 auto;
    max-width: 1380px;
    padding: 40px;
`;

const Container = styled.div`
    display: grid;
    grid-gap: 1rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`;

const FlagWrapper = styled.a`
    background-color: cornflowerblue;
    background-image: url('${(props) => props.theme.image}');
    background-size: cover;
    background-position: center center;
    border: 3px solid black;
    cursor: pointer;
    display: block;
    text-decoration: none;

    &:visited,
    &:active {
        border: 3px solid black;
    }

    &:hover {
        border: 3px solid black;
    }
`;

const Flag = styled.div`
    padding-bottom: 50%;
`;

const StatesList = props => {
    const states = Object.keys(estados).map(key => {
        const image = `/images/estados/${key}.svg`;

        return (
            <FlagWrapper
                theme={{image}}
                key={key}
                href={`estados/${key}`}
            >
                <Flag/>
            </FlagWrapper>
        );
    });

    return (
        <Wrapper>
            <Container>
                {states}
            </Container>
        </Wrapper>
    )
};

export default StatesList;
