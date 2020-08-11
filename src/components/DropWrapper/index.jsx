import React, {useState} from "react";
import produce from 'immer';

import {Div, ButtonAddCol, ContainerButton} from "./style";
import Col from "../Col"
import {col, data} from "../../data/index";
import dropContext from './context';

const DropWrapper = () => {

    const [allData, setAllData] = useState(data); 
    const [colunas, setColunas] = useState(col);
    let blankSpace = -1;

    function move(from, to) {        
        setAllData(produce(allData, draft => {             
            const dragged = draft[from];            
            if(dragged.col !== draft[to].col) {
                dragged.col = draft[to].col;
            }            
            draft.splice(from, 1);
            draft.splice(to, 0, dragged);
        }));
    }

    function moveToAnotherList(toList, ticket) {        
        setAllData(produce(allData, draft => {      
            const dragged = draft[ticket];
            const column = Object.assign(colunas);            
            dragged.col = toList;            
            draft.splice(ticket, 1);
            draft.push(dragged);
            column[toList].tickets++;
            setColunas(column);
        }));            
    } 
    
    function createBlankSpace(from, to) {
        if(blankSpace === -1) {
            console.log('Aqui');
            setAllData(produce(allData, draft => {             
                const dragged = draft[from];
                if(dragged.col !== draft[to].col) {
                    dragged.col = draft[to].col;
                }            
                dragged.hidden = true;
                draft.splice(to, 0, dragged);
                blankSpace = to;
            }));
        }
    }

    function removeBlankSpace() {
        console.log('teste 2');
        setAllData(produce(allData, draft => {
            draft.splice(blankSpace, 0);
            blankSpace = -1;
        }));
    }

    function addAnotherCard(id){          
        let lastId = 0;   
        allData.map(item => {
            if(id === item.col) {                
                if(item.id > lastId) {
                    lastId = item.id;                    
                }
            }
        });        
        const newCard = {
            "id": lastId,
            "description": "New card",
            "col": id
        }

        setAllData(allData.concat(newCard));  
        data.push(newCard);
    }           

    function newColumn() {        
        const newCol = {            
            "id": colunas.length,
            "title": "New Column",
            "tickets": 0,
        }        
        setColunas(colunas.concat(newCol));        
    }

    return (
        <dropContext.Provider value={{
            allData, 
            move, 
            moveToAnotherList, 
            addAnotherCard, 
            createBlankSpace, 
            removeBlankSpace}}>
            <Div>
            {
                colunas.map((col, index) => {
                    let tickets = 0;
                    allData.map((item) => {
                        if(item.col === index) {                            
                            tickets++;
                        }                    
                    });
                    if(tickets === 0){
                        tickets = 1;
                    }
                    col.tickets = tickets;
                    return (<Col items={tickets} qtd={col.tickets} key={col.id} colIndex={index} info={allData}>{col}</Col>);
                }
                )            
            }
            <ContainerButton>
                <ButtonAddCol onClick={() => {newColumn()}}>+  Add another list</ButtonAddCol>
            </ContainerButton>
            </Div>
        </dropContext.Provider>
    );
}

export default DropWrapper;