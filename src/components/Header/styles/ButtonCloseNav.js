import styled from 'styled-components';
import { media } from '../../../app/theme/variables';

const ButtonCloseNav = styled.button`
    position: absolute;

    right: 15px;
    top: 15px;

    font-size: 32px;

    ${media['md'](`
        display: none;
    `)}
`;

export default ButtonCloseNav;