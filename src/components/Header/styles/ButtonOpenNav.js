import styled from 'styled-components';
import { media } from '../../../app/theme/variables';

const ButtonOpenNav = styled.button`
   
    ${media['md'](`
        display: none;
    `)}
`;

export default ButtonOpenNav;