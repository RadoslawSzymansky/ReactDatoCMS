import styled from 'styled-components';

import Title from './Title';
import Nav from './Nav';

const Header = styled.div`
    background-color: red;
`;

Header.Title = Title;
Header.Nav = Nav;

export default Header;