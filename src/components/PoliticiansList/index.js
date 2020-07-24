import React from 'react';
import styled from 'styled-components';
import { mockedPoliticanList } from './mockedPoliticanList';
import { getApiUrl } from '../../helpers/GetApiUrl';

import PoliticianCard from '../PoliticianCard';
import SectionByline from '../SectionByline';
import GetInTouch from '../GetInTouch';

const Wrapper = styled.section`
    display: block;
    margin: 0 auto;
    max-width: 1380px;
    padding: 40px;
`;

const Container = styled.div`
    display: grid;
    grid-gap: 1rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }
`;

export default class PoliticiansList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            politicians: []
        }
    }

    componentDidMount() {
        const { apiRoute } = this.props;

        return fetch(getApiUrl(apiRoute))
            .then(response => response.json())
            .then(politicians => {
                this.setState({
                    isLoading: false,
                    politicians
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    renderCards(politicians, isLoading) {
        return politicians.map((politician, index) => (
            <a
                key={isLoading ? `loading-${index}` : politician.id}
                style={{
                    pointerEvents: isLoading ? 'none' : 'auto',
                    textDecoration: 'none'
                }}
                href={`/detalhes/${politician.slug}`}
            >
                <PoliticianCard
                    politician={politician}
                    isLoading={isLoading}
                />
            </a>
        ));
    }

    render() {
        const { isLoading } = this.state;
        const data = isLoading ? mockedPoliticanList : this.state.politicians;

        return (
            <Wrapper>
                {!isLoading && !data.length ? (
                    <section>
                        <SectionByline noSpacing={true} text="Ainda não existem políticos com este critério." />
                        <GetInTouch noSpacing={true} />
                    </section>
                ) : (
                    <Container>
                        {this.renderCards(data, isLoading)}
                    </Container>
                )}
            </Wrapper>
        );
    }
}
