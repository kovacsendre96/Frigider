import React from 'react';
import { ListItemStyle } from './styles/ListStyle';



const Datas = ({ listItem, setList, list }) => {



    const remove = () => {

        setList(list.filter((f) => f.id !== listItem.id))

    }


    return (
        <>

            <h3>{listItem.product}</h3>
            <p style={{ color: 'gray' }}> még {listItem.resultNumber} napig tartható a fagyasztóban</p>
            <p>Berakási dátum:{listItem.date}</p>
            <p>( {listItem.since} napja )</p>
            <p>Mennyiség:{listItem.quantity} {listItem.unit}</p>

            <button onClick={remove} >Töröl</button>

       </>
    );

};

export default Datas;