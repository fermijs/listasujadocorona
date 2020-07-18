import React from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import { v4 as uuidv4 } from 'uuid';

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
`;

const DetailList = styled.ul`
    display: block;
    width: 100%;
`;

const DetailTitle = styled.em`
    color: black;
    font-size: 16px;
    font-weight: 700;
    margin-right: 5px;
`;

const DetailContent = styled.span`
    color: black;
    font-size: 16px;
`;

const SUPPORTED_DETAILS = [
    {
        key: 'party',
        value: 'Partido'
    },
    {
        key: 'twitter',
        value: 'Twitter'
    },
    {
        key: 'evidence',
        value: 'Postagens anticientíficas'
    }
];

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

const DetailItem = styled.li`
    display: flex;
    justify-content: center;

    &:not(:last-child) {
        margin-bottom: 10px;
    }

    > span {
        flex-grow: ${props => ( props.theme.isLoading ? 1 : 'auto' )};
    }
`;

const PoliticianCard = ({ politician, isLoading, isDetailView }) => {
    const details = SUPPORTED_DETAILS.map(detail => {
        const item = politician[detail.key];

        return (
            !item
            ? <></>
            : (
                <DetailItem key={uuidv4()} theme={{isLoading}}>
                    {
                        isLoading
                        ? <Skeleton />
                        : (
                            <>
                                <DetailTitle>
                                    {detail.value}:
                                </DetailTitle>
                                <DetailContent>
                                    {Array.isArray(item) ? item.length : item}
                                </DetailContent>
                            </>
                        )
                    }
                </DetailItem>
            )
        );
    });

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
                <DetailList>
                    {details}
                </DetailList>
            </Container>
        </Wrapper>
    );
};

export default PoliticianCard;
