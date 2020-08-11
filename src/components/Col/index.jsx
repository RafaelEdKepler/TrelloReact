import React, {useState, useRef, useContext} from "react";
import {useDrop} from 'react-dnd';
import {Container, Title, AddTicketButton} from "./style";
import {data} from "../../data/index";
import Ticket from "../Ticket/index";
import ITEM_TYPE from "../../data/type";
import dropContext from '../DropWrapper/context';

const Col = ({items, info, children, colIndex, qtd}) => {          
    const ref = useRef();   
    const {moveToAnotherList} = useContext(dropContext);
    const {addAnotherCard} = useContext(dropContext);
    const [, dropRef] = useDrop({
        accept: ITEM_TYPE,
        drop(item, monitor) { 
            if(monitor.getClientOffset() !== null) {
                let tickets = 0;
                data.map(item => {
                    if(item.col === colIndex) {
                        tickets++;
                    }
                });
                const targetSize = ref.current.getBoundingClientRect();
                const whiteSpace = targetSize.bottom - 200;
                const draggedOffset = monitor.getClientOffset();
                const draggedTop = draggedOffset.y - targetSize.top;                        
                if(draggedTop < whiteSpace && tickets !== 0) {
                    return;
                }
                const targetListIndex = colIndex;
                const draggedIndex = item.index; 
                let toIndex = null;
                if(toIndex === draggedIndex) {
                    return;
                }
                moveToAnotherList(targetListIndex, draggedIndex);
                toIndex = item.index;
            }
        }
    });  
    
    dropRef(ref);  

    return(
        <Container ref={ref} items={qtd}>            
            <Title type="text" defaultValue={children.title}/>
            {
                info.map((item, index) => children.id === item.col && 
                <Ticket key={index} hidden={item.hidden} index={index} colIndex={colIndex} data={item}/>)
            }
            <AddTicketButton onClick={() => {addAnotherCard(children.id)}}>+  Add another card</AddTicketButton>
        </Container>
    );
}

export default Col;