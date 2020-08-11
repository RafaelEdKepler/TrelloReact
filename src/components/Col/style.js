import styled from "styled-components";

export const Container = styled.div`
    height: ${props=> (props.items * 110) + 130}px;
    width: 225px;    
    background-color: #ebecf0;
    border-radius: 3px;
    padding-top: 2px;
    margin: 10px 10px 10px 10px;    
    left: ${props => props.index * 300}px;    
`;
export const Ticket = styled.div`
    height: 100px;
    background-color: #f2f2f2;
`;

export const Title = styled.input`
    margin: 3px 0px 0px 10px;
    font-family: Gill Sans Extrabold, sans-serif;
    background-color: #ebecf0;
    font-size: 14px;
    box-shadow: 0 0 0 0; 
    border: 0 none; 
    outline: 0;
`;

export const AddTicketButton = styled.button`
    width: 220px;
    margin: 10px 0px 5px 5px;
    background-color: #ebecf0;
    color: grey;    
    box-shadow: 0 0 0 0; 
    border: 0 none; 
    outline: 0;
`;
