import styled, { css } from "styled-components";

export const Container = styled.div`     
    width: 200px;
    height: 100px;    
    margin: 10px 10px 10px 10px;        
    background-color: #ffffff;
    border-radius: 3px;
    box-shadow: 0px 0px black, 0px 0px black, 0px 1px grey;
    padding-left: 2px;
    display: flex;
    flex-direction: row;

    ${props => props.isDragging && css `        
        background-color: #e2e4e9;        
        border-radius: 0;
        background: transparent;
        box-shadow: none;
        cursor: grabbing;

        div, label {            
            opacity: 0;
        }
    `}
    ${props => props.hidden && css `
        background-color: #FFF;
        opacity: 0.8;
    `}
`;


export const Description = styled.textarea`  
    font-size: 15px;
    margin: 10px 2px 2px 2px;
    font-family: Arial, sans-serif;   
    width: 85%;
    flex-wrap: wrap;
    box-shadow: 0 0 0 0; 
    border: 0 none; 
    outline: 0;
    resize: none;        
`;

export const ChangeDescription = styled.textarea`
        font-size: 15px;
        margin: 10px 2px 2px 2px;
        font-family: Arial, sans-serif;
        width: 85%;
        flex-wrap: wrap;
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
        resize: none;
`;

export const EditImage = styled.img`
    width: 15px;
    height: 15px;
    margin: 2px 15px 0px 0px;
`;

export const AlterButton = styled.button`
    background: #ccc;
    opacity: 0.1;
    border-style: none;
    margin: 10px 4px 0px 0px;    
    padding-left: 2px;
    height: 20px;
    width: 20px;
    border-radius: 3px;

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;

export const SaveButton = styled.button`
    width: 100px;
    heigth: 40px;
    background: #04D361;
    color: #FFF;
`;