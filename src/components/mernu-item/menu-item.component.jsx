import React from 'react';
import { useHistory } from 'react-router-dom';

import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size }) => {
    const history = useHistory();
    return (
        <MenuItemContainer
            size={size}
            onClick={() => history.push(`/shop/${title}`)}
        >
            <BackgroundImageContainer
                className='background-image'
                imageUrl={imageUrl}
            />
            <ContentContainer className='content'>
                <ContentTitle>{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle>SHOP NOW</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    )
};

export default MenuItem;