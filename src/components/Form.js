import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ListDesign } from './styles/FormStyle';
import { Alert } from 'react-bootstrap';

const Form = ({ productName, setProductName, input, setInput, anotherInput, setAnotherInput, list, setList, setResult, result, quantity, setQuantity, unit, setUnit, setPut, category, setCategory }) => {

    const [showAlert, setShowAlert] = useState(false);

    const [warning, setWarning] = useState({
        'input': false,
        'anotherInput': false,
        'quantity': false,
        'unit': false,
        'category': false,
        'productName': false,

    });

    //INPUT HANDLERS

    const anotherInputHandler = (e) => {

        setAnotherInput(e.target.value);

    };

    const InputHandler = (e) => {
        setInput(e.target.value);
    };

    const FoodNameHandler = (e) => {

        setProductName(e.target.value);
    };

    const QuantityHandler = (e) => {
        setQuantity(e.target.value);
    };

    const UnitHandler = (e) => {
        setUnit(e.target.value);
    };

    const CategoryHandler = (e) => {
        setCategory(e.target.value);
    };


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




    // VALIDATION FUNCTION

/*     function validation() {
        if (input === undefined) {
            setWarning({
                input: true
            })

        };

        if (anotherInput === undefined) {
            setWarning({
                'anotherInput': true
            })

        };
        if (quantity === undefined) {
            setWarning({
                'quantity': true
            })

        };

        if (productName === undefined) {
            setWarning({
                'productName': true
            })
        };

        if (unit === undefined) {
            setWarning({
                'unit': true
            })
        };
        if (category === undefined) {
            setWarning({
                ...warning, category: true
            })
        };

    }; */






    //SUBMIT HANDLER

    const submitHandler = (e) => {
        e.preventDefault();

      /*   validation(); */





        if (input && anotherInput && unit && quantity > 0 && productName !== undefined) {

            setList([...list, { product: productName, resultNumber: result, id: uuidv4(), date: input, endDate: anotherInput, since: since, unit: unit, quantity: quantity, category: category }]);
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


    };








    return (
        <ListDesign>


            <div className='label'>
                <div className="top">Címke</div>
                <form onSubmit={submitHandler} id="datas">
                    <div className="input-wrapper">
                        <label for='product-name'>Megnevezés</label>
                        <input id="product-name" value={productName} onChange={FoodNameHandler}></input>
                        <i className={warning.productName ? `warning` : ''}>!</i>
                    </div>

                    <div className="input-wrapper">
                        <label for='quantity'>Mennyiség</label>
                        <input id="quantity" onChange={QuantityHandler} value={quantity} type="number"></input>
                        <i className={warning.quantity ? `warning` : ''}>!</i>
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
                        <i className={warning.unit ? `warning` : ''}>!</i>
                    </div>


                    <div className="input-wrapper">
                        <label for='quantity'>Kategória</label>

                        <select onChange={CategoryHandler}>
                            <option hidden selected>Választ</option>
                            <option value="Húsfélék">Húsfélék</option>
                            <option value="Tejtermék">Tejtermékek</option>
                            <option value="Gyümölcsök és zöldségek ">Gyümölcsök és zöldségek</option>
                            <option value="Gabona félék">Gabona félék</option>
                            <option value="Kész étel">Kész ételek</option>
                        </select>
                        <i className={warning.category ? `warning` : ''}>!</i>
                    </div>


                    <div className="input-wrapper">
                        <label for='put-in-date'>Berakás dátuma</label>
                        <input id="put-in-date" onChange={InputHandler} value={input} type="date"></input>
                        <i className={warning.input ? `warning` : ''}>!</i>
                    </div>

                    <div className="input-wrapper">
                        <label for='take-out-date'>Szavatossági idő</label>
                        <input id="take-out-date" onChange={anotherInputHandler} value={anotherInput} type="date"></input>
                        <i className={warning.anotherInput ? `warning` : ''}>!</i>
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

