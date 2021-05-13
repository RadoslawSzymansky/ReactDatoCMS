import styled from 'styled-components';
import Title from './Title';
import Nav from './Nav';

const Header = styled.div`
    background-color: #000;
    padding: 20px;
    color: #fff;
`;

Header.Title = Title;
Header.Nav = Nav;

export default Header;