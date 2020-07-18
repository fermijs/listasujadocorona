import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Meta from "../../components/Meta";
import PoliticiansList from "../../components/PoliticiansList";

const Home = () => {
    return (
        <main>
            <Meta title="Rio Grande do Sul"/>
            <Header
                estado="rs"
            />
            <PoliticiansList />
            <Footer />
        </main>
    );
};

export default Home;
