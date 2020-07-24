import React from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import CardDetailItem from '../CardDetailItem';
import { estados } from "../../constants/estados";

const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Picture = styled.div`
    border: 3px solid #000;
    border-radius: 50%;
    height: 150px;
    margin-bottom: 20px;
    overflow: hidden;
    width: 150px;

    img {
        display: block;
        height: 100%;
        object-fit: cover;
        width: 100%;
    }
`;

const Name = styled.h3`
    color: black;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: center;
    width: 100%;
`;

const DetailList = styled.ul`
    display: block;
    width: 100%;
`;

const Wrapper = styled.div`
    border: 3px solid #000;
    cursor: ${props => ( props.theme.isDetailView ? 'auto' : 'pointer' )};
    display: block;
    padding: 40px 20px;
    transition: background-color .125s ease-in-out;
    pointer-events: ${props => ( props.theme.isLoading ? 'none' : 'auto' )};

    &:hover,
    &:active {
        background-color: ${props => ( props.theme.isDetailView ? 'white' : 'rgba(178, 255, 255, .1)' )};
        border: 3px solid ${props => ( props.theme.isDetailView ? 'black' : '#1974D2' )};
    }
`;

const PoliticianCard = ({ politician, isLoading, isDetailView }) => {
    const state = politician.state && politician.state.toLowerCase();

    return (
        <Wrapper
            tabIndex={isLoading ? -1 : 0}
            ariaLabel={isLoading ? 'Carregando' : ''}
            ariaRole={'Informações do Político'}
            theme={{
                isLoading,
                isDetailView
            }}
        >
            <Container>
                <Picture>
                    {
                        isLoading
                        ? <Skeleton circle={true} height={150} width={150} />
                        : (
                            <img
                                alt={politician.name}
                                src={politician.profilePicture}
                            />
                        )
                    }
                </Picture>
                <Name>
                    {isLoading ? <Skeleton /> : politician.name}
                </Name>
                {
                    !isLoading &&
                    <DetailList>
                        <CardDetailItem
                            headline={`Estado`}
                            content={estados[state]}
                            icon={`/images/estados/${state}.svg`}
                            alt={estados[state]}
                        />
                        <CardDetailItem
                            headline={`Partido`}
                            content={politician.party}
                        />
                        {
                            politician.twitter && (
                                <CardDetailItem headline={`Twitter`}>
                                    <a href={`https://twitter.com/${politician.twitter}`} target='_blank' rel='noopener noreferrer'>
                                        {politician.twitter}
                                    </a>
                                </CardDetailItem>
                            )
                        }
                        <CardDetailItem headline={`Evidências`} content={politician.evidences.length} />
                    </DetailList>
                }
            </Container>
        </Wrapper>
    );
};

export default PoliticianCard;
