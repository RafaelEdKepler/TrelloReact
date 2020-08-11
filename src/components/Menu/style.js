import styled from "styled-components";

export const ContainerLeft = styled.div`    
    justify-contents: space-between;
    flex-direction: row;
    display: flex;    
    margin: 5px 2px 2px 0px;
`;

export const ContainerRight = styled(ContainerLeft)`            
    align-items: right;    
    right: 10px;
    position: absolute;    
`;

export const Div = styled(ContainerLeft)`    
    margin: 35px 0 0 0;    
    left: 0;
    width: 100%;              
`;

export const Title = styled.label`
    font-size: 18px;
    font-family: Gill Sans Extrabold, sans-serif;
    margin: 7px;
    color: white;        
`;