import React from 'react';
import styled from 'styled-components';

import { estados } from '../../constants/estados';

const Title = styled.h1`
    font-size: 72px;
    color: white;
    font-weight: 700;
    margin-bottom: 40px;
    position: relative;
    text-align: center;
    z-index: 1;

    @media (max-width: 768px) {
        font-size: 48px;
    }
`;

const Byline = styled.p`
    color: white;
    font-size: 48px;
    font-weight: 700;
    position: relative;
    text-align: center;
    z-index: 1;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const HeaderElement = styled.header`
    background-color: cornflowerblue;
    background-image: ${props => `url("/images/estados/${props.theme.estado}.svg")`};
    background-size: cover;
    background-position: center center;
    padding: 80px 40px;
    position: relative;

    &:after {
        background-color: rgba(0, 0, 0, .7);
        bottom: 0;
        content: '';
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 0;
    }
`;

const Header = ({ title, estado }) => {
    return (
        <HeaderElement theme={{estado}}>
            <Title>
                {title ? title : 'Lista suja do Corona'}
            </Title>
            <Byline>
                {estados[estado]}
            </Byline>
        </HeaderElement>
    );
};

export default Header;
