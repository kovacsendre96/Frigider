import React, { useState } from 'react';
import { ListItemStyle } from './styles/ListStyle';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Datas = ({ listItem, setList, list,filterItem,show,show2,setShow,setShow2 }) => {

    


    const handleClose = () => setShow(false);
    
    const HandleShow2 = () => setShow2(true);
    
    const handleClose2 = () => setShow2(false);
    
    const remove = () => setList(list.filter((f) => f.id !== listItem.id))
    
 


    return (
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
            <Button onClick={remove} variant="primary">Igen</Button>
        </Modal.Footer>
        </Modal>
       </>
    );

};

export default Datas;