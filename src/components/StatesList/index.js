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
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(60px, 2fr));
`;

const StateWrapper = styled.a`
    align-items: center;
    display: flex;
    justfiy-content: center;
    flex-direction: column;
    text-decoration: none;

    &:hover {
        span {
            color: blue;
        }
    }
`;

const FlagWrapper = styled.div`
    background-color: cornflowerblue;
    background-image: url('${(props) => props.theme.image}');
    background-size: cover;
    background-position: center center;
    border: 3px solid black;
    cursor: pointer;
    display: block;
    width: 100%;

    &:visited,
    &:active {
        border: 3px solid black;
    }

    &:hover {
        border: 3px solid blue;
    }
`;

const Flag = styled.div`
    padding-bottom: 50%;
`;

const StateName = styled.span`
    color: black;
    display: block;
    margin-top: 5px;
    text-align: center;
    text-decoration: underline;
`;

const StatesList = props => {
    const states = Object.keys(estados).map(key => {
        const image = `/images/estados/${key}.svg`;

        return (
            <StateWrapper
                key={key}
                href={`/estados/${key}`}
            >
                <FlagWrapper
                    title={estados[key]}
                    theme={{image}}
                >
                    <Flag/>
                </FlagWrapper>
                <StateName>
                    {estados[key]}
                </StateName>
            </StateWrapper>
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
