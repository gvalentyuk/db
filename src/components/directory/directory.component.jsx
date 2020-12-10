import React from 'react';
import { useSelector} from 'react-redux';

import { selectCollections } from "../../redux/directory/directory.selectors";
import MenuItem from "../mernu-item/menu-item.component";
import { DirectoryMenuContainer } from './directory.styles'

const Directory = () => {
    const sections = useSelector(selectCollections);
    return (
        <DirectoryMenuContainer>
            {sections.map(({title, imageUrl, id, size}) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
            ))}
        </DirectoryMenuContainer>
    );
}

export default Directory;