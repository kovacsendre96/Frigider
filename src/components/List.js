import React, { useState } from 'react';
import ListItem from './ListItem';
import Datas from './Datas';
import { ListStyle } from './styles/ListStyle';


const List = ({ list, setList, result, setResult, listItem, input, anotherInput }) => {

   


    const Filter = () => {
    
        

    }
        

 


    return (


        <ListStyle>

            <div className="datas">
                <div className="top"></div>
                <div className="content">
                
          {
                    list.map((listItem) => (

                        <Datas
                            list={list}
                            listItem={listItem}
                            result={result}
                            key={listItem.id}
                            setList={setList}
                            input={input}
                            anotherInput={anotherInput}
            
                        />
                
                ))
          }

                

                </div>
                <div className="bottom"></div>

            </div>
            <div className="inside">
                {list.map((listItem) => (
                    <div onClick={Filter}>
                        <ListItem
                            list={list}
                            listItem={listItem}
                            result={result}
                            key={listItem.id}
                            setList={setList}
                            input={input}
                            anotherInput={anotherInput}

                        />
                    </div>

                ))}
            </div>

        </ListStyle>


    );
};

export default List;