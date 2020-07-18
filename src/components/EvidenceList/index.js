import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const Wrapper = styled.section`
    align-items: center;
    border: 3px solid #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
    padding: 40px 20px;
`;

const Title = styled.h3`
    color: black;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
`;

const EvidenceListElement = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const EvidenceItem = styled.li`
    text-align: center;

    span {
        display: block;
        margin-bottom: 10px;
    }

    em {
        font-size: 16px;
        font-weight: bold;
    }
`;

const EvidenceList = ({ evidences }) => {
    return (
        <Wrapper>
            <Title>
                Evidências
            </Title>
            <EvidenceListElement>
                {
                    evidences.map((evidence, index) => (
                        <EvidenceItem key={uuidv4()}>
                            <article>
                                <span>
                                    Evidência {index + 1} - <em>{evidence.description}</em>
                                </span>
                                <div>
                                    <a href={evidence.link} target="_blank" rel="noopener noreferrer">{evidence.description}</a>
                                </div>
                            </article>
                        </EvidenceItem>
                    ))
                }
            </EvidenceListElement>
        </Wrapper>
    );
};

export default EvidenceList;
