import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Meta from "../../components/Meta";
import PoliticiansList from '../../components/PoliticiansList';
import SectionTitle from "../../components/SectionTitle";
import SectionByline from "../../components/SectionByline";
import GetInTouch from "../../components/GetInTouch";
import StatesList from "../../components/StatesList";

const Home = () => {
    return (
        <main>
            <Meta title="Página inicial"/>
            <Header/>
            <section>
                <SectionTitle text="O que é"/>
                <SectionByline text="A lista suja do corona é uma plataforma em que você pode conferir se o seu candidato nas eleições de 2020 espalhou desinformação a respeito do corona-vírus."/>
                <GetInTouch />
            </section>
            <section>
                <SectionTitle text="Encontre políticos por estado" />
                <StatesList />
            </section>
            <div>
                <SectionTitle text="Políticos em alta"/>
                <PoliticiansList
                    apiRoute={`politicans/trending`}
                />
            </div>
            <Footer />
        </main>
    );
};

export default Home;
