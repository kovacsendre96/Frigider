import React, { useState } from 'react';
import ListItem from './ListItem';
import Datas from './Datas';
import { ListStyle } from './styles/ListStyle';



import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const List = ({ list, setList, result, input, anotherInput, filteredItem, setFilteredItem, filterItem }) => {


    
   


    const [show, setShow] = useState(false);

    const [show2,setShow2] = useState(false);

    const handleClose = () => setShow(false);



    const handleClose2 = () => setShow2(false);

    const HandleShow2 = () =>setShow2(true);







    return (


        <ListStyle>



            {filteredItem.map((filterItem) => (
                             <>             
                                
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title> <h3>{filterItem.product}</h3></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <p style={{ color: 'gray' }}> még {filterItem.resultNumber} napig tartható a fagyasztóban</p>
                            <p>Berakási dátum:{filterItem.date} ( {filterItem.since===0?'ma':filterItem.since+' napja'} )</p>

                            <p style={{ color: "red" }}>Szavatossági idő: {filterItem.endDate}</p>
                            <p>Mennyiség:{filterItem.quantity} {filterItem.unit}</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                            Vissza
                                </Button>

                                <Button variant="danger" onClick={HandleShow2}>
                            Töröl
                                </Button>
                                
                               
                            </Modal.Footer>
                        </Modal>

                      
                     

                        <Modal
                        show={show2}
                        onHide={handleClose2}
                        backdrop="static"
                        keyboard={false}
                        >
                        <Modal.Header closeButton>
                            <Modal.Title>Törlés</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                           Biztosan ki akarod törölni ezt a terméket?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose2}>
                                Vissza
                            </Button>
                            <Button variant="primary">Igen</Button>
                        </Modal.Footer>
                        </Modal>
                       </>
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
                            show={show}
                            setShow={setShow}
                        />
                    </div>
                ))}
            </div>
        </ListStyle>


    );
};

export default List;