import React, { useState } from 'react';
import { ListItemStyle } from './styles/ListStyle';




const ListItem = ({ listItem, list,  setFilteredItem,  setShow }) => {

 

    const showDatas = () => {


        setFilteredItem(list.filter((f) => f.id === listItem.id))

        setShow(true);




    }



    return (
       
             <ListItemStyle variant="primary" onClick={showDatas}>

                <p>{listItem.product}</p>
             
             
            </ListItemStyle>


        
    );
};

export default ListItem;


