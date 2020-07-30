import React from "react";
import {Container} from "./style";
import item from "../../data/index";
import Ticket from "../Ticket/index";

const Col = (props) => {
    return(
        <Container>
            {
                item.map((item, index) => <Ticket item={item} index={index}/>
                )
            }
        </Container>
    );
}

export default Col;