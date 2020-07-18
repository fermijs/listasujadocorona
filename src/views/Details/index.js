import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PoliticianCard from '../../components/PoliticianCard';
import EvidenceList from "../../components/EvidenceList";
import Meta from '../../components/Meta';

import { mockedPolitician } from '../../components/PoliticiansList/mockedPoliticanList';

const Wrapper = styled.section`
    padding: 80px;
`;

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            politician: null
        };
    }

    componentDidMount() {
        return new Promise(() => {
            setTimeout(() => {
                this.setState({
                    isLoading: false,
                    politician: mockedPolitician
                });
            }, 2000);
        });
    }

    render() {
        const { id } = this.props.match.params;
        const politician = this.state.politician ? this.state.politician : mockedPolitician;
        const { isLoading } = this.state;

        return (
            <main>
                <Meta
                    title={!isLoading && politician.name}
                    route={`detalhes/${id}`}
                />
                <Header estado="rs"/>
                <Wrapper>
                    <PoliticianCard
                        politician={politician}
                        isLoading={isLoading}
                        isDetailView={true}
                    />
                    { !isLoading && <EvidenceList evidences={politician.evidences} /> }
                </Wrapper>
                <Footer />
            </main>
        );
    }
}

export default withRouter(Details);
