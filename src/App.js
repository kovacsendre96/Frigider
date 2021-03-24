import Recact, { useState, useEffect } from 'react'
import Form from './components/Form';
import List from './components/List';
import { GlobalStyle } from './components/styles/GlobalStyle';
import Frigider from './components/Frigider';
import { Switch, Route } from 'react-router-dom';



function App() {





  const [result, setResult] = useState();

  const [productName, setProductName] = useState();

  const [list, setList] = useState([]);

  const [input, setInput] = useState();

  const [anotherInput, setAnotherInput] = useState();

  const [quantity, setQuantity] = useState();

  const [unit, setUnit] = useState();

  const [category, setCategory] = useState();

  const [put, setPut] = useState(false);

  const [filteredItem, setFilteredItem] = useState([]);


  const [show, setShow] = useState(false);

  const [show2, setShow2] = useState(false);

  const [quantityChange, setQuantityChange] = useState(false);

  const [capacity, setCapacity] = useState();

  const [capacityInput, setCapacityInput] = useState();

  const [actualCapacity, setActualCapacity] = useState();


  //Save to Local
  useEffect(() => {
    getLocalList();
  

  }, [])

  useEffect(() => {

    saveLocalList();
  }, [list, quantityChange])


  const saveLocalList = () => {

    localStorage.setItem('list', JSON.stringify(list));
 

  };

  const getLocalList = () => {
    if (localStorage.getItem('list') === null) {
      localStorage.setItem('list', JSON.stringify([]));
    }
    else {
      let listLocal = JSON.parse(localStorage.getItem('list'));
      setList(listLocal)
     
    }
  };





  return (
    <GlobalStyle>
      <Switch>
        <Route path="/Frigider" exact>
          <Form
            productName={productName}
            setProductName={setProductName}
            input={input}
            setInput={setInput}
            anotherInput={anotherInput}
            setAnotherInput={setAnotherInput}
            list={list}
            setList={setList}
            setResult={setResult}
            result={result}
            quantity={quantity}
            setQuantity={setQuantity}
            unit={unit}
            setUnit={setUnit}
            put={put}
            setPut={setPut}
            category={category}
            setCategory={setCategory}
          />
          <Frigider
            put={put}
          />
        </Route>
        <Route path="/list" exact>
          <List
            list={list}
            setList={setList}
            result={result}
            input={input}
            anotherInput={anotherInput}
            quantity={quantity}
            setQuantity={setQuantity}
            unit={unit}
            setUnit={setUnit}
            put={put}
            setPut={setPut}
            filteredItem={filteredItem}
            setFilteredItem={setFilteredItem}
            show={show}
            show2={show2}
            setShow={setShow}
            setShow2={setShow2}
            quantityChange={quantityChange}
            setQuantityChange={setQuantityChange}
            category={category}
            setCategory={setCategory}
            capacity={capacity}
            capacityInput={capacityInput}
            setCapacity={setCapacity}
            setCapacityInput={setCapacityInput}
            actualCapacity={actualCapacity}
            setActualCapacity={setActualCapacity}



          />
        </Route>
      </Switch>
    </GlobalStyle>

  );
}

export default App;
