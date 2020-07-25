import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: black;
    color: white;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    padding: 40px;
    text-align: center;

    a {
        text-decoration: underline;

        &:visited {
            color: white;
        }
    }

    div {
        margin-top: 20px;

        &:first-child {
            margin-top: 0;
        }
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <div>
                Código aberto no <a href="https://github.com/fermijs/listasujadocorona" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
            <div>
                <a href={`https://forms.gle/U9fwsayaYGzWhpfU7`} target="_blank" rel="noopener noreferrer">Envie sua denúncia</a>
            </div>
            <div>
                <a href={`https://twitter.com/listasuja`} target="_blank" rel="noopener noreferrer">Siga no twitter @ListaSuja</a>
            </div>
        </StyledFooter>
    );
};

export default Footer;
