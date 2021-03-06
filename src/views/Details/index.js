import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PoliticianCard from '../../components/PoliticianCard';
import EvidenceList from "../../components/EvidenceList";
import Meta from '../../components/Meta';
import SocialSharing from '../../components/SocialSharing';
import { getApiUrl } from "../../helpers/GetApiUrl";

import { mockedPolitician } from '../../components/PoliticiansList/mockedPoliticanList';

const Wrapper = styled.section`
    margin: 0 auto;
    max-width: 768px;
    padding: 40px 20px;

    @media (min-width: 768px) {
        padding: 80px;
    }
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
        const { id } = this.props.match.params;

        return fetch(getApiUrl(`politicans/${id}`))
            .then(response => response.json())
            .then(response => {
                const politician = response;

                this.setState({
                    isLoading: false,
                    politician
                });
            });
    }

    render() {
        const { id } = this.props.match.params;
        const politician = this.state.politician ? this.state.politician : mockedPolitician;
        const { isLoading } = this.state;
        const socialMessage = `${politician.name}${politician.twitter && ` (${politician.twitter})`} está na lista de políticos que apoiam medidas anti-ciência. https://www.listasujadocorona.com.br/detalhes/${politician.slug} #ListaSujaDoCorona`

        return (
            <main>
                <Meta
                    title={isLoading ? '' : politician.name}
                    route={`detalhes/${id}`}
                    image={politician.profilePicture}
                />
                <Header />
                <Wrapper>
                    <PoliticianCard
                        politician={politician}
                        isLoading={isLoading}
                        isDetailView={true}
                    />
                    { !isLoading &&  <SocialSharing message={socialMessage}/>}
                    { !isLoading && <EvidenceList evidences={politician.evidences} /> }
                </Wrapper>
                <Footer />
            </main>
        );
    }
}

export default withRouter(Details);
