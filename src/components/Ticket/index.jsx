import React, {useRef, useContext, useState} from "react";
import {useDrag, useDrop} from 'react-dnd';

import ITEM_TYPE from '../../data/type';

import {Container, Description, AlterButton, EditImage} from "./style";
import dropContext from '../DropWrapper/context';
import editIcon from '../../assets/edit.svg';

const Ticket = ({index, data, colIndex, hidden}) => {
    let dropped = false;
    let changed = false;
    const ref = useRef();
    const {move} = useContext(dropContext);
    const [changeDescription, setChangeDescription] = useState(true);
    //const {removeBlankSpace} = useContext(dropContext);
    //const {createBlankSpace} = useContext(dropContext);    
    const [ {isDragging}, dragRef ] = useDrag({
        item: {type: ITEM_TYPE, index: index, id: data.id, colIndex: colIndex},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    function handleChangeDescription(e) {        
        if(e.key === 'Enter') {
            setChangeDescription(true)
        }
    }

    const [, dropRef] = useDrop({        

        accept: ITEM_TYPE,
        drop(item, monitor) {            
            dropped = true;            
            //removeBlankSpace();
            const draggedListIndex = item.colIndex;
            const targetListIndex = colIndex;
            const draggedIndex = item.index;
            const targetIndex = index;
            
            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top) / 2;
            const draggedOffset = monitor.getClientOffset();
            const draggedTop = draggedOffset.y - targetSize.top;

            if(targetListIndex === draggedListIndex && 
                draggedIndex < targetIndex && 
                draggedTop < targetCenter)  {
                return;
            }            
            if(targetListIndex === draggedListIndex && 
                draggedIndex > targetIndex && 
                draggedTop > targetCenter) {
                return;
            }                        
            move(draggedIndex, targetIndex);            
        },
        hover(item, monitor) {
            const draggedListIndex = item.colIndex;
            const targetListIndex = colIndex;
            const draggedIndex = item.index;
            const targetIndex = index;

            if(draggedIndex === targetIndex) {
                return;
            }

            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top) / 2;
            const draggedOffset = monitor.getClientOffset();
            const draggedTop = draggedOffset.y - targetSize.top;

            if(targetListIndex === draggedListIndex && 
                draggedIndex < targetIndex && 
                draggedTop < targetCenter)  {
                return;
            }
            if(targetListIndex === draggedListIndex && 
                draggedIndex > targetIndex && 
                draggedTop > targetCenter) {
                return;
            }
            if(targetIndex !== item.index) {                
                changed = true;
            }
            if(dropped === true || changed === true) {
                //createBlankSpace(draggedIndex, targetIndex);
            }
            dropped = false;
            //item.index = targetIndex;
        }
    });

    dragRef(dropRef(ref));

    return(
        <>
            <Container ref={ref} isDragging={isDragging} hidden={hidden}>
                <Description 
                    rows="4" 
                    maxLength="55" 
                    defaultValue={data.description}
                    readOnly={changeDescription}
                    onKeyPress={(e) => handleChangeDescription(e)}
                >                
                </Description>
                <AlterButton onClick={() => {
                    setChangeDescription(false);
                    }} type="button"><EditImage src={editIcon}/></AlterButton>
            </Container>           
        </>
    )
};

export default Ticket;