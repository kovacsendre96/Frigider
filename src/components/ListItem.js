import React from 'react';
import { ListItemStyle } from './styles/ListStyle';



const ListItem = ({ listItem, setList, list }) => {


  



    return (
        <ListItemStyle>

            <p>{listItem.product}</p>
           

        </ListItemStyle>
    );
};

export default ListItem;


