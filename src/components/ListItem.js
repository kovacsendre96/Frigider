import React, { useEffect, useState } from 'react';
import { ListItemStyle } from './styles/ListStyle';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDrumstickBite,faBreadSlice,faFish,faCheese,faUtensils,faCarrot,} from '@fortawesome/free-solid-svg-icons';





const ListItem = ({ listItem, list, setFilteredItem, show, show2, setShow, setShow2,setList, filteredItem, quantityChange, setQuantityChange, date }) => {

    let icon;
    let szöveg;
   {
        switch(listItem.category){
            case 'drumstick-bite' :icon= faDrumstickBite
            break; 
            case 'fas fa-fish':icon=  faFish 
            break;
            case 'fas fa-carrot':icon=  faCarrot 
            break;
            case 'fas fa-bread-slice':icon=  faBreadSlice 
            break;
            case 'fas fa-utensils':icon=  faUtensils
            break;
            case 'fas fa-cheese':icon=  faCheese
            break;
            }
    }
    const [changeInput, setChangeInput] = useState();

    const handleClose = () => setShow(false);

    const HandleShow2 = () => setShow2(true);

    const handleClose2 = () => setShow2(false);



    const ChangeHandler = () => setQuantityChange(true);


    const CloseChangeHandler = () => setQuantityChange(false);




    const showDatas = () => {


        setFilteredItem(list.filter((f) => f.id === listItem.id))

        setShow(true);

    }

    const ChangeInputHandler = (e) => {
        setChangeInput(e.target.value);
    }

    
    



    return (

        <>
     

            <ListItemStyle variant="primary" onClick={showDatas}>
                <div className="top">
                    <FontAwesomeIcon className='icon' icon={icon} />
                </div>
                <div className="middle"><p>{listItem.product}</p><p>{listItem.quantity} {listItem.unit}</p>
                </div>
                <div className="bottom"></div>
            </ListItemStyle>


            {
                filteredItem.map((filterItem) => (
                    
                    <>
                   
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title> <h3>{filterItem.product}</h3></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p style={{ color: 'gray' }}> {filterItem.resultNumber>=0?'még '+ ((new Date(filterItem.endDate).getTime() - new Date(date.today).getTime()) / date.oneDay) +' napig érvényes a szavatossági idő':'A termék szavatossági ideje '+filterItem.resultNumber*-1+' napja lejárt.'} </p>
                                <p>Berakási dátum: {filterItem.date} ( { ((new Date(date.today).getTime() - new Date(filterItem.date).getTime()) / date.oneDay) === 0 ? 'ma' :  ((new Date(date.today).getTime() - new Date(filterItem.date).getTime()) / date.oneDay) + ' napja'} )</p>

                                <p style={{ color: "red" }}>Szavatossági idő: {filterItem.endDate}</p>
                                <p>Mennyiség: {filterItem.quantity} {filterItem.unit}</p>
                              
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Vissza
                                </Button>

                                <Button variant="primary" onClick={ChangeHandler}>
                                    Mennyiség módosítása
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
                                <Button onClick={() => {
                                    setList(list.filter((f) => f.id !== filterItem.id))
                                    setShow2(false);
                                    setShow(false);
                                    
                                }} variant="primary">Igen</Button>
                            </Modal.Footer>
                        </Modal>



                        <Modal
                            show={quantityChange}
                            onHide={CloseChangeHandler}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Mennyiség módosítása</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Írja be a módosítani kívánt mennyiséget !
                                <input onChange={ChangeInputHandler} type='number'></input>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={CloseChangeHandler}>
                                    Vissza
                   </Button>
                                <Button onClick={() => {



                                    filterItem.quantity = parseInt(filterItem.quantity) + parseInt(changeInput);
                                    setQuantityChange(false);

                                }} variant="success">Hozzáad</Button>

                                <Button onClick={() => {
                                    filterItem.quantity = parseInt(filterItem.quantity) - parseInt(changeInput);
                                    if (filterItem.quantity <= 0) {

                                        HandleShow2()
                                        filterItem.quantity = parseInt(filterItem.quantity) + parseInt(changeInput);
                                    }

                                    setQuantityChange(false);

                                }} variant="warning">Kivon</Button>
                            </Modal.Footer>
                        </Modal>





                    </>
                ))
            }






        </>



    );
};

export default ListItem;


