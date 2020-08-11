import React from "react";
import {ContainerLeft, ButtonMenu, SearchInput, Div, ContainerRight, Logo, DivImage, ButtonIcon} from "./style";
import trello from "./../../assets/trello.png";

const Header = () => {
    return (
        <Div>
            <ContainerLeft> 
                <ButtonMenu width={30}/>
                <ButtonMenu width={30}/>
                <ButtonMenu width={100}/>
                <SearchInput/>            
            </ContainerLeft> 
            <DivImage>
                <Logo src={trello} alt={"Trello"}/>                
            </DivImage>
            <ContainerRight>
                <ButtonMenu width={30}/>
                <ButtonMenu width={30}/>
                <ButtonIcon/>
            </ContainerRight>         
        </Div>
    );
};

export default Header;