import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowAltCircleLeft,} from '@fortawesome/free-solid-svg-icons';




const SideBar = ({ list, setSelectedCategory, capacityInput, setCapacityInput, actualCapacity, setActualCapacity, toggleMenu, setToggleMenu }) => {










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






    const SelectCategoryHandler = (e) => {
        setSelectedCategory(e.target.value);
    };

    const CapacityInputHandler = (e) => {
        setCapacityInput(e.target.value);
    };


    const ActualCapacityHandler = () => {

        setActualCapacity(capacityInput);

    };


    const ToggleMenuHandler = () => {
        setToggleMenu(!toggleMenu);

    }




    return (
        <div className={toggleMenu ? 'side-bar' : 'side-bar-close'}>

            <div className="sider-bar-top">

                <FontAwesomeIcon className="hamburger" onClick={ToggleMenuHandler} icon={faBars} size="2x" />
                <Link className="link" to="/Frigider"> <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" /></Link>
            </div>

            <div className="capacity-wrapper">
                <div className="capacity__top"><label for='capacity'>Adja meg a hűtő űrtartalmát !</label></div>


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
                        <p>Telítettség</p>

                        <div className="capacity__bottom">
                            <div className="capacity__bottom__indicator">
                                <div style={{ width: `${resultCapacity}%` }} className="capacity__bottom__indicator__inside">
                                    {resultCapacity}%
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setActualCapacity()}>Módosít</button>
                    </>
                }
            </div>

            <div className="filter">
                <h3>Szűrés</h3>
                <select onChange={SelectCategoryHandler}>
                    <option selected>Összes</option>
                    <option value="drumstick-bite">&#xf6d7; Húsfélék</option>
                    <option value="fas fa-fish">&#xf578;Halfélék</option>
                    <option value="fas fa-cheese">&#xf7ef;Tejtermékek</option>
                    <option value="fas fa-carrot">&#xf787;Gyümölcsök és zöldségek</option>
                    <option value="fas fa-bread-slice">&#xf7ec;Gabonafélék</option>
                    <option value="fas fa-utensils">&#xf2e7;Kész ételek</option>
                </select>

            </div>
        </div>



    );
};
export default SideBar;

