import React from 'react';
import styled from 'styled-components';

import Meta from '../../components/Meta';

const HeadingText = styled.h2`
    color: black;
    display: block;
    font-size: 72px;
    font-weight: 700;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 42px;
    }
`;

const pageTitle = '404 - Página não encontrada';
const pageRoute = '404';

const Details = () => {
    return (
        <main>
            <Meta
                title={pageTitle}
                route={pageRoute}
            />
            <HeadingText>
                404 - Página não encontrada
            </HeadingText>
        </main>
    );
};

export default Details;
