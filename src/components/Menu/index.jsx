import React from "react";
import {ContainerLeft, Title, Div, ContainerRight} from "./style";
import {ButtonMenu, ButtonIcon} from "../Header/style";

const Menu = () => {
    return (
        <Div>
            <ContainerLeft>
                <Title style={{fontWeight: "bold"}}>Título</Title>
                <ButtonMenu width={30}/>
                <ButtonMenu width={100}/>
                <ButtonMenu width={100}/>
                <ButtonIcon/>
                <ButtonMenu width={70}/>
            </ContainerLeft>
            <ContainerRight>
                <ButtonMenu width={70}/>
                <ButtonMenu width={100}/>
            </ContainerRight>
        </Div>
    );
};

export default Menu;
