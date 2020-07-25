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

            a {
                word-break: break-all;
            }
        }
    }
`;

const Button = styled.a`
    background-color: #24a0ed;
    border: 3px solid black;
    color: #fff;
    cursor: pointer;
    display: block;
    line-height: 80px;
    margin: 20px auto 0;
    max-width: 240px;
    padding: 10px 40px;
    text-align: center;
    text-decoration: none;
    transition: background-color .125s ease-in-out;

    &:hover {
        background-color: #3c5b97;
    }
`;

const GetInTouch = ({noSpacing}) => {
    return (
        <Container theme={{noSpacing}}>
            <p>
                Envia sua denúncia no formulário abaixo
                <Button href={`https://forms.gle/U9fwsayaYGzWhpfU7`} target="_blank" rel="noopener noreferrer">
                    Enviar denúncia
                </Button>
            </p>
        </Container>
    );
};

export default GetInTouch;
