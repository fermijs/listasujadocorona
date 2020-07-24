import React from 'react';
import styled from 'styled-components';

import HeaderImage from './header-icon.png';

const Wrapper = styled.nav`
    background-color: black;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 2;
`;

const Container = styled.div`
    align-items: center;
    display: flex;
    height: 60px;
    justify-content: center;
    margin: 0 auto;
    max-width: 1380px;
    padding: 0 40px;

    @media (min-width: 768px) {
        height: 80px;
        justify-content: space-between;
    }
`;

const ImageWrapper = styled.a`
    display: flex;
    height: 40px;
    width: 40px;

    @media (min-width: 768px) {
        height: 60px;
        margin-right: 40px;
        width: 60px;
    }

    img {
        width: 100%;
    }
`;

const NavItem = styled.li`
    a {
        background-color: black;
        color: white;
        display: block;
        height: 60px;
        line-height: 60px;
        padding: 0 10px;
        text-decoration: none;
        transition: background-color .125s ease-in-out;

        @media (min-width: 768px) {
            height: 80px;
            line-height: 80px;
            padding: 0 40px;
        }

        &:hover {
            background-color: rgba(255, 255, 255, .1);
        }
    }
`;

const NavContainer = styled.ul`
    display: none;
    justify-content: flex-end;

    @media (min-width: 768px) {
        display: flex;
        transform: translateX(40px);
    }
`;

const Navigator = () => {
    return (
        <Wrapper>
            <Container>
                <ImageWrapper href='/' title='Página inicial'>
                    <img
                        alt='Logo Lista Suja do Corona'
                        src={HeaderImage}
                    />
                </ImageWrapper>
                <NavContainer>
                    <NavItem>
                        <a
                            href='mailto:listasujadocorona@gmail.com'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Contato
                        </a>
                    </NavItem>
                </NavContainer>
            </Container>
        </Wrapper>
    );
};

export default Navigator;
