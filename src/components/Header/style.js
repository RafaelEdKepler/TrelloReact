import styled from "styled-components";

export const ContainerLeft = styled.div`                
    align-items: left;
    flex-direction: row;
    width: 30%;    
    padding: 1px 1px 1px 1px;    
    position: absolute;
    left: 10px;
`;

export const ContainerRight = styled.div`            
    flex-direction: row;    
    padding: 1px 1px 1px 1px;
    position: absolute;
    right: 10px;
`;

export const Div = styled.div`
    width: 100%;
    background-color: #4682B4;
    height: 40px;
    flex-direction: row;        
    flex-wrap: nowrap; 
    display: flex;
    justify-content: space-between;     
`;

export const DivImage = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    right:45%;
    margin-left: auto;
    margin-right: auto;
`;

export const Logo = styled.img`
    max-width: 95px;
    min-height: 35px;
    width: auto;
    height: auto;
`;

export const ButtonMenu = styled.button`
    height: 30px;
    width: ${props=> props.width}px;
    border-width: 0px;    
    border-radius: 5px;    
    margin: 3px 3px 3px 3px;
    background-color: #6495ED;
`;

export const ButtonIcon = styled.button`
    height: 30px;
    width: 30px;
    border-width: 0px;
    border-radius: 15px;
    margin: 3px 3px 3px 3px;
    background-color: #6495ED;
`;

export const SearchInput = styled.button`
    opacity: 1;
    background-color: #6495ED;
    height: 30px;
    width: 200px;    
    border-width: 0px;
    margin: 3px 3px 3px 3px;
    border-radius: 5px;        
`;