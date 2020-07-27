import React from 'react';
import { Helmet } from "react-helmet";

const DEFAULT_DESCRIPTION =
    "A lista suja do corona é uma lista expondo os candidatos que apoiaram medidas contrárias aos protocolos de segurança estabelecidos pela OMS.";

const Meta = ({title, description, route, image}) => {
    const parsedTitle = `Lista Suja do Corona - ${title}`;

    return (
        <Helmet>
            <title>{parsedTitle}</title>
            <meta property="og:title" content={parsedTitle}/>
            <link rel="canonical" href={`https://listasujadocorona.com.br/${route}`} />
            <meta property="og:url" content={`https://listasujadocorona.com.br/${route}`} />
            <meta name="description" content={description || DEFAULT_DESCRIPTION} />
            <meta property="og:description" content={description || DEFAULT_DESCRIPTION} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={`https://listasujadocorona.com.br/${route}`} />
            <meta property="twitter:title" content={parsedTitle} />
            <meta property="twitter:description" content={description || DEFAULT_DESCRIPTION} />
            <meta property="twitter:image" content={image || 'https://www.listasujadocorona.com.br/lista-suja-do-corona.png'} />
        </Helmet>
    );
};

export default Meta;
