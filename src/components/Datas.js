import React, { useState } from 'react';
import { ListItemStyle } from './styles/ListStyle';



const Datas = ({ listItem, setList, list,filteredItem,filterItem }) => {

    


    const remove = () => {

        setList(list.filter((f) => f.id !== listItem.id))

    }


 


    return (
        <>

            <h3>{filterItem.product}</h3>
            <p style={{ color: 'gray' }}> még {filterItem.resultNumber} napig tartható a fagyasztóban</p>
            <p>Berakási dátum:{filterItem.date}</p>
            <p>( {filterItem.since} napja )</p>
            <p>Mennyiség:{filterItem.quantity} {filterItem.unit}</p>

            <button onClick={remove} >Töröl</button>
      

        </>
    );

};

export default Datas;