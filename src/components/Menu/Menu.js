import styled from 'styled-components';

const Menu = () => {

    return (
        <MenuUl>
            <li>
                Pierwszy
            </li>
            <li>
                Drugi
            </li>
        </MenuUl>
    );
};

const MenuUl = styled.ul`
    background-color: green;
`;

export default Menu;