import Recact, { useState } from 'react'
import Form from './components/Form';
import List from './components/List';
import { GlobalStyle } from './components/styles/GlobalStyle';
import Frigider from './components/Frigider';
import { Switch, Route } from 'react-router-dom';



function App() {


  const [result, setResult] = useState();

  const [productName, setProductName] = useState('');

  const [list, setList] = useState([]);

  const [input, setInput] = useState();

  const [anotherInput, setAnotherInput] = useState();

  const [quantity, setQuantity] = useState();

  const [unit, setUnit] = useState();

  const [put, setPut] = useState(false);

  const [filteredItem, setFilteredItem] = useState([]);

    
  const [show, setShow] = useState(false);
    
  const [show2,setShow2] = useState(false);






  return (
    <GlobalStyle>
      <Switch>
        <Route path="/" exact>
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
   

        />
      </Route>
      </Switch>
    </GlobalStyle>

  );
}

export default App;
