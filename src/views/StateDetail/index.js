import React from 'react';
import { withRouter } from 'react-router';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Meta from '../../components/Meta';
import PoliticiansList from '../../components/PoliticiansList';
import SectionTitle from '../../components/SectionTitle';
import StatesList from '../../components/StatesList';
import { estados } from '../../constants/estados';

const StateDetail = props => {
    const estado = props.match.params.estado;

    return (
        <main>
            <Meta title={`${estados[estado]}`}/>
            <Header estado={estado}/>
            <div>
                <SectionTitle text={`Lista de Políticos`}/>
                <PoliticiansList
                    apiRoute={`politicans?state=${estado}`}
                />
            </div>
            <section>
                <SectionTitle text='Encontre políticos por estado' />
                <StatesList />
            </section>
            <Footer />
        </main>
    );
};

export default withRouter(StateDetail);
