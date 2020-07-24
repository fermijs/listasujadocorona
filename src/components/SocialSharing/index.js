import React from 'react';
import styled from 'styled-components';
import BorderedCard from '../BorderedCard';

import WhatsappIcon from './whatsapp.svg';
import FacebookIcon from './facebook.svg';
import TwitterIcon from './twitter.svg';

import {
    TwitterShareButton,
    FacebookShareButton,
    WhatsappShareButton
} from 'react-share';

const Wrapper = styled.section`
    display: flex;
    padding-top: 20px;
`;

const Image = styled.img`
    width: 80px;
`;

const SocialSharing = ({ message }) => {
    return (
        <BorderedCard text='Compartilhar'>
            <Wrapper>
                <TwitterShareButton url={message}>
                    <Image src={TwitterIcon} alt='Twitter' />
                </TwitterShareButton>
                <WhatsappShareButton url={message}>
                    <Image src={WhatsappIcon} alt='Whatsapp' />
                </WhatsappShareButton>
                <FacebookShareButton url={message}>
                    <Image src={FacebookIcon} alt='Facebook' />
                </FacebookShareButton>
            </Wrapper>
        </BorderedCard>
    );
};

export default SocialSharing;
