import { useState } from 'react';
import { H3 } from "../../primitives/H";

import Header from "./styles";
import Menu from '../../features/menu/Menu';
import Container from '../../primitives/Container';
import ButtonCloseNav from "./styles/ButtonCloseNav";
import ButtonOpenNav from "./styles/ButtonOpenNav";

const HeaderComponent = ({ title = "", subTitle = "", menu = "" }) => {

    const [menuOpened, setMenuOpened] = useState(false); 

    return (
        <Container>
            <Header>
                <Header.Title>
                    <H3 logo>{title}</H3>
                </Header.Title>
                <Header.Nav menuOpened={menuOpened}>
                    <ButtonCloseNav onClick={() => setMenuOpened(false)}>x</ButtonCloseNav>
                    <Menu />
                </Header.Nav>
                <ButtonOpenNav onClick={() => setMenuOpened( !menuOpened )}>menu</ButtonOpenNav>
            </Header>
        </Container>
    );
}

export default HeaderComponent;