import React, { useState } from 'react';
import ListItem from './ListItem';
import { ListStyle } from './styles/ListStyle';
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import arrow from './styles/long-arrow-alt-left-solid.svg';



import 'bootstrap/dist/css/bootstrap.min.css';


const List = ({ list, setList, result, input, anotherInput, filteredItem, setFilteredItem, filterItem, setShow, show, show2, setShow2, quantityChange, setQuantityChange }) => {




    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;

    const oneDay = 24 * 60 * 60 * 1000;







    return (


        <ListStyle>
            
            <Link className="link" to="/Frigider"><img src={arrow} /><p>Vissza</p></Link>
            <div className="inside">

                <div className="fresh-food">
                    <Alert variant="success">Friss ételek</Alert>

                    <div className="food-items">
                        {list.map((listItem) => (


                            ((new Date(listItem.endDate).getTime() - new Date(today).getTime()) / oneDay) > 3 ?
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
                                    setShow={setShow}
                                    filterItem={filterItem}
                                    show={show}
                                    show2={show2}
                                    setShow={setShow}
                                    setShow2={setShow2}
                                    quantityChange={quantityChange}
                                    setQuantityChange={setQuantityChange}

                                />
                                : ""
                        ))}
                    </div>
                </div>


                <div className="middle-fresh-food">
                    <Alert variant="warning">3 napon belül lejáró ételek</Alert>

                    <div className="food-items">
                        {list.map((listItem) => (

                            (((new Date(listItem.endDate).getTime() - new Date(today).getTime()) / oneDay) < 3 && ((new Date(listItem.endDate).getTime() - new Date(today).getTime()) / oneDay) >= 0) ?
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
                                    setShow={setShow}
                                    filterItem={filterItem}
                                    show={show}
                                    show2={show2}
                                    setShow={setShow}
                                    setShow2={setShow2}
                                    quantityChange={quantityChange}
                                    setQuantityChange={setQuantityChange}

                                />
                                : ""
                        ))}
                    </div>
                </div>

                <div className="expired-food">
                    <Alert variant="danger">Lejárt szavatosságú ételek</Alert>
                    <div className="food-items">
                        {list.map((listItem) => (
                            listItem.endDate < today ?

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
                                    setShow={setShow}
                                    filterItem={filterItem}
                                    show={show}
                                    show2={show2}
                                    setShow={setShow}
                                    setShow2={setShow2}
                                    quantityChange={quantityChange}
                                    setQuantityChange={setQuantityChange}

                                />
                                : ""
                        ))}
                    </div>
                </div>
            </div>
        </ListStyle>


    );
};

export default List;


