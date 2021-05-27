import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default styled(NavLink)`
    border: none;
    color: blue;
    text-decoration: none;

    &.active {
        border-bottom: 1px solid;
    }
`;