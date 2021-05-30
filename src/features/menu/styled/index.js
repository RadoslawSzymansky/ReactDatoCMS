import styled from 'styled-components';
import { media } from '../../../app/theme/variables';

const Menu = styled.div`

    color: #444;
    font-weight: 500;
    list-style: none;

    ${media['md'](`
        display: flex;
    `)}
`;

export default Menu;