import styled from "styled-components";
import { media } from '../../../app/theme/variables';

const Nav = styled.nav`
  letter-spacing: 2px;

  position: absolute;

  top: ${({ menuOpened }) => menuOpened ? 0 : -100}vh;
  left: 0;
  background-color: #fff;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 9;

  ${media['md'](`
    position: static;
    width: auto;
    height: auto
  `)}
`;

export default Nav;
 