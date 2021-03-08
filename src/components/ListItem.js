import React, { useState } from 'react';
import { ListItemStyle } from './styles/ListStyle';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const ListItem = ({ listItem, setList, list, filteredItem, setFilteredItem, filterItem, setShow }) => {

    const remove = () => {

        setList(list.filter((f) => f.id !== listItem.id))


    }

    const showDatas = () => {


        setFilteredItem(list.filter((f) => f.id === listItem.id))

        setShow(true);




    }



    return (
       
             <ListItemStyle variant="primary" onClick={showDatas}>

                <p>{listItem.product}</p>
               {/*  <button onClick={remove} >Töröl</button> */}
             
            </ListItemStyle>


        
    );
};

export default ListItem;


