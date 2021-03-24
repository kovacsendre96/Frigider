import React, { useState } from 'react';
import ListItem from './ListItem';
import { ListStyle } from './styles/ListStyle';
import { Alert, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import arrow from './styles/long-arrow-alt-left-solid.svg';



import 'bootstrap/dist/css/bootstrap.min.css';



const List = ({ list, setList, result, input, anotherInput, filteredItem, setFilteredItem, filterItem, setShow, show, show2,
    setShow2, quantityChange, setQuantityChange, category, capacity, setCapacity, capacityInput, setCapacityInput, actualCapacity, setActualCapacity }) => {


    let kg = [0];
    let dkg = [0];
    let g = [0];
    let liter = [0];
    let dl = [0];
    let cl = [0];

    list.map((l) => {
        switch (l.unit) {
            case 'g':
                g.push(l.quantity / 1000);
                break;
            case 'dkg':
                dkg.push(l.quantity / 100);
                break;
            case 'kg':
                kg.push(l.quantity);
                break;
            case 'cl':
                cl.push(l.quantity / 100);
                break;
            case 'dl':
                dl.push(l.quantity / 100);
                break;
            case 'l':
                liter.push(l.quantity);
        }
    }

    )

    var sumKg = eval(kg.join('+'));



    var sumDkg = eval(dkg.join('+'));


    var sumG = eval(g.join('+'));

    var sumLiter = eval(liter.join('+'));

    var sumDl = eval(dl.join('+'));

    var sumCl = eval(cl.join('+'));

    let resultCapacity = Math.ceil(((sumKg + sumDkg + sumG + sumLiter + sumDl + sumCl) / actualCapacity) * 100);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;

    const oneDay = 24 * 60 * 60 * 1000;

    setCapacity(resultCapacity);







    const [selectedCategory, setSelectedCategory] = useState('Összes');

    const SelectCategoryHandler = (e) => {
        setSelectedCategory(e.target.value);
    };






    const CapacityInputHandler = (e) => {
        setCapacityInput(e.target.value);
    }


    const ActualCapacityHandler = (e) => {

        setActualCapacity(capacityInput)

    }









    return (


        <ListStyle>

            <Link className="link" to="/Frigider"><img src={arrow} /><p>Vissza</p></Link>



            <div className="side-bar">

                <div className="capacity-wrapper">
                    <label for='capacity'>Adja meg a hűtő űrtartalmát !</label>

                    {
                        actualCapacity === undefined &&
                        <div className="capacity-input-wrapper">
                        <input onChange={CapacityInputHandler} id='capacity' type="number"></input>
                        <p>liter</p>
                        <button onClick={ActualCapacityHandler}>OK</button>

                    </div>
                    }
                    {
                        actualCapacity !== undefined &&
                        <>
                            <p>Hűtőjének űrtartalma: {actualCapacity} liter</p>
                            <p>Telítettség: {capacity}%</p>
                        </>
                    }

                </div>

                <div className="filter">
                    <h3>Szűrés</h3>
                    <select onChange={SelectCategoryHandler}>
                        <option selected>Összes</option>
                        <option value="Húsfélék">Húsfélék</option>
                        <option value="Tejtermék">Tejtermékek</option>
                        <option value="Gyümölcsök és zöldségek">Gyümölcsök és zöldségek</option>
                        <option value="Gabona félék">Gabona félék</option>
                        <option value="Kész étel">Kész ételek</option>
                    </select>

                </div>
            </div>




            <div className="inside">

                <div className="fresh-food">
                    <Alert variant="success">Friss ételek</Alert>

                    <div className="food-items">


                        {

                            list.map((listItem) => (
                                ((new Date(listItem.endDate).getTime() - new Date(today).getTime()) / oneDay) > 3 ?
                                    selectedCategory === 'Összes' || listItem.category === selectedCategory ?

                                        < ListItem
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
                                            category={category}

                                        />

                                        : ""
                                    : ""
                            ))
                        }


                    </div>
                </div>


                <div className="middle-fresh-food">
                    <Alert variant="warning">3 napon belül lejáró ételek</Alert>

                    <div className="food-items">
                        {list.map((listItem) => (


                            selectedCategory === 'Összes' || listItem.category === selectedCategory ?

                                (((new Date(listItem.endDate).getTime() - new Date(today).getTime()) / oneDay) <= 3 && ((new Date(listItem.endDate).getTime() - new Date(today).getTime()) / oneDay) >= 0) ?
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
                                        category={category}

                                    />
                                    : ""
                                : ""

                        ))}
                    </div>
                </div>

                <div className="expired-food">
                    <Alert variant="danger">Lejárt szavatosságú ételek</Alert>
                    <div className="food-items">
                        {list.map((listItem) => (
                            listItem.endDate < today ?
                                selectedCategory === 'Összes' || listItem.category === selectedCategory ?

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
                                        category={category}

                                    />
                                    : ""
                                : ""

                        ))}
                    </div>
                </div>
            </div>
        </ListStyle>


    );
};

export default List;


