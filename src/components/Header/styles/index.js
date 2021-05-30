import styled from 'styled-components';

import Title from './Title';
import Nav from './Nav';
import ButtonCloseNav from './ButtonCloseNav';
import ButtonOpenNav from './ButtonOpenNav';

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 15px 0;
`;

Header.Title = Title;
Header.Nav = Nav;
Header.ButtonClose = ButtonCloseNav;
Header.ButtonOpen = ButtonOpenNav;

export default Header;