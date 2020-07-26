import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import BorderedCard from '../BorderedCard';
import { TwitterTweetEmbed } from 'react-twitter-embed';


const EvidenceListElement = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 10px;
`;

const EvidenceItem = styled.li`
    font-size: 16px;
    line-height: 1.5;
    text-align: center;

    & + li {
        margin-top: 20px;
    }

    span {
        display: block;
        margin-bottom: 10px;
    }

    em {
        font-weight: bold;
    }

    a {
        word-break: break-all;
    }
`;

const EvidenceItemWrapper = styled.article`
    display: flex;
    flex-direction: column;

    .twitter-tweet {
        margin: 20px auto;
    }
`;

const EvidenceList = ({ evidences }) => {
    return (
        <BorderedCard text="Evidências">
            <EvidenceListElement>
                {
                    evidences.map((evidence, index) => (
                        <EvidenceItem key={uuidv4()}>
                            <EvidenceItemWrapper>
                                <span>
                                    Evidência {index + 1} - <em>{evidence.description}</em>
                                </span>
                                <div>
                                    <a href={evidence.link} target="_blank" rel="noopener noreferrer">{evidence.link}</a>
                                </div>
                                {
                                    evidence.source === 'twitter' && <TwitterTweetEmbed tweetId={evidence.tweetId}/>
                                }
                            </EvidenceItemWrapper>
                        </EvidenceItem>
                    ))
                }
            </EvidenceListElement>
        </BorderedCard>
    );
};

export default EvidenceList;
