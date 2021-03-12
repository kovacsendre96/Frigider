import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ListDesign } from './styles/FormStyle';

import { Alert } from 'react-bootstrap';

const Form = ({ productName, setProductName, input, setInput, anotherInput, setAnotherInput, list, setList, setResult, result, quantity, setQuantity, unit, setUnit, put, setPut }) => {

    const [showAlert, setShowAlert] = useState(false)
  
    //INPUT HANDLERS

    const anotherInputHandler = (e) => {

        setAnotherInput(e.target.value)



    }

    const InputHandler = (e) => {
        setInput(e.target.value)
    }

    const FoodNameHandler = (e) => {

        setProductName(e.target.value)
    }

    const QuantityHandler = (e) => {
        setQuantity(e.target.value)
    }

    const UnitHandler = (e) => {
        setUnit(e.target.value)
    }


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;

    const date1 = new Date(input);
    const date2 = new Date(anotherInput);
    const date3 = new Date(today);
    const oneDay = 24 * 60 * 60 * 1000;

    setResult(((date2.getTime() - date3.getTime()) / oneDay));

    const since = (date3.getTime() - date1.getTime()) / oneDay;








    //SUBMIT HANDLER

    const submitHandler = (e) => {
        e.preventDefault();

        if (input && anotherInput && unit && quantity > 0 && productName !== undefined) {

            setList([...list, { product: productName, resultNumber: result, id: uuidv4(), date: input, endDate: anotherInput, since: since, unit: unit, quantity: quantity }]);
            setProductName();
            setUnit();
            setInput();
            setAnotherInput();
            setQuantity();
            setPut(true);
            e.target.reset();
            setTimeout(function () { setPut(false); }, 300);




           


        }

        else {
            setShowAlert(true)
        }


    }








    return (
        <ListDesign>


            <div className='label'>
                <div className="top">Címke</div>
                <form onSubmit={submitHandler} id="datas">
                    <div className="input-wrapper">
                        <label for='product-name'>Megnevezés</label>
                        <input id="product-name" value={productName} onChange={FoodNameHandler}></input>
                    </div>

                    <div className="input-wrapper">
                        <label for='quantity'>Mennyiség</label>
                        <input id="quantity" onChange={QuantityHandler} value={quantity} type="number"></input>
                        <select onChange={UnitHandler} name="quantity" id="quantity" form="datas">

                            <option hidden selected>Választ</option>
                            <option value="kg">kg</option>
                            <option value="dkg">dkg</option>
                            <option value="g">g</option>
                            <option value="l">l</option>
                            <option value="dl">dl</option>
                            <option value="cl">cl</option>
                            <option value="db">db</option>
                        </select>

                    </div>

                    <div className="input-wrapper">
                        <label for='put-in-date'>Berakás dátuma</label>
                        <input id="put-in-date" onChange={InputHandler} value={input} type="date"></input>
                    </div>

                    <div className="input-wrapper">
                        <label for='take-out-date'>Szavatossági idő</label>
                        <input id="take-out-date" onChange={anotherInputHandler} value={anotherInput} type="date"></input>
                    </div>


                    <div className="button-wrapper">
                        <button >OK</button>
                    </div>


                </form>
                <div className="bottom">
                    <div className='alert'>

                        {showAlert ?
                            <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                                <Alert.Heading>Hiányos, vagy hibás mezők</Alert.Heading>
                                <p> <strong>Győződjön meg az alábbikról!</strong></p>
                                <ul>
                                    <li>Minden mező kitöltése megtörtént</li>
                                    <li>A mennyiség pozitív szám</li>
                                </ul>
                            </Alert>
                            : ''

                        }

                    </div>
                </div>
            </div>
        </ListDesign>

    );
};

export default Form;

