import React from 'react';
import styled from 'styled-components';

const DetailItem = styled.li`
    align-items: center;
    display: flex;
    justify-content: center;

    &:not(:last-child) {
        margin-bottom: 10px;
    }

    > span {
        flex-grow: ${props => ( props.theme.isLoading ? 1 : 'auto' )};
    }

    a {
        color: blue;

        &:visited {
            color: blue;
        }
    }
`;

const DetailTitle = styled.em`
    color: black;
    font-size: 16px;
    font-weight: 700;
    margin-right: 5px;
`;

const DetailContent = styled.div`
    align-items: center;
    color: black;
    display: flex;
    font-size: 16px;
    justify-content: center;
`;

const Icon = styled.img`
    display: block;
    margin-left: 10px;
    width: 30px;
`;

const CardDetailItem = ({headline, content, icon, alt, children}) => {
    return (
        <DetailItem>
            <DetailTitle>
                {headline}:
            </DetailTitle>
            <DetailContent>
                {
                    children && children
                }
                {
                    content &&
                    <span>
                        {content}
                    </span>
                }
                {
                    icon && <Icon src={icon} alt={alt}/>
                }
            </DetailContent>
        </DetailItem>
    );
};

export default CardDetailItem;
