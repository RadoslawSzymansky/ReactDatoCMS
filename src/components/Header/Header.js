import { H1 } from "../../primitives/H";

import Header from "./styles";
import Menu from '../../features/menu/Menu';
import Container from '../../primitives/Container';

const HeaderComponent = ({ title = "", subTitle = "", menu = "" }) => (
    <Header>
        <Container>
            <Header.Title>
                <H1>{title}</H1>
            </Header.Title>
            <Header.Nav >
                <Menu />
            </Header.Nav>
        </Container>
    </Header>
);

export default HeaderComponent;