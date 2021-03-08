import React, { useState } from 'react';
import ListItem from './ListItem';
import Datas from './Datas';
import { ListStyle } from './styles/ListStyle';



import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const List = ({ list, setList, result, input, anotherInput, filteredItem, setFilteredItem, filterItem,setShow,show, show2, setShow2 }) => {


    
   










    return (


        <ListStyle>



            {filteredItem.map((filterItem) => (
                      <Datas
                      filterItem={filterItem}
                      show={show}
                      show2={show2}
                      setShow={setShow}
                      setShow2={setShow2}
                      
                      
                      />
            ))}



            <div className="inside">
                {list.map((listItem) => (
                    <div >
                        <ListItem
                            list={list}
                            listItem={listItem}
                            result={result}
                            key={listItem.id}
                            setList={setList}
                            input={input}
                            anotherInput={anotherInput}
                            filteredItem={filteredItem}
                            setFilteredItem={setFilteredItem}
                            filterItem={filterItem}
                            setShow={setShow}
                        
                        />
                    </div>
                ))}
            </div>
        </ListStyle>


    );
};

export default List;