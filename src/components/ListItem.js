import React, { useState } from 'react';
import { ListItemStyle } from './styles/ListStyle';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




const ListItem = ({ listItem, list, setFilteredItem, show, show2, setShow, setShow2, filterItem, setList, filteredItem }) => {


    const handleClose = () => setShow(false);

    const HandleShow2 = () => setShow2(true);

    const handleClose2 = () => setShow2(false);

    /*   const remove = () => {
          setList(list.filter((f) => f.id !== listItem.id))
          setShow2(false);
          setShow(false);
      } */





    const showDatas = () => {


        setFilteredItem(list.filter((f) => f.id === listItem.id))

        setShow(true);




    }



    return (

        <>
            <ListItemStyle variant="primary" onClick={showDatas}>
                <p>{listItem.product}</p>


            </ListItemStyle>

            {
                filteredItem.map((filterItem) => (
                    <>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title> <h3>{filterItem.product}</h3></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p style={{ color: 'gray' }}> még {filterItem.resultNumber} napig tartható a fagyasztóban</p>
                                <p>Berakási dátum:{filterItem.date} ( {filterItem.since === 0 ? 'ma' : filterItem.since + ' napja'} )</p>

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
                                <Button onClick={ () => {
                                    setList(list.filter((f) => f.id !== filterItem.id))
                                    setShow2(false);
                                    setShow(false);
                                }} variant="primary">Igen</Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                ))
            }






        </>



    );
};

export default ListItem;


