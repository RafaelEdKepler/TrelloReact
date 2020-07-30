import React from "react";
import {Container, Title, Description} from "./style";

const Ticket = (props) => {
    return(
        <Container>
            <Title>{props.item.title}</Title>
            <Description>{props.item.description}</Description>
        </Container>
    )
};

export default Ticket;