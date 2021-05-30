import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default styled(NavLink)`
    margin-left: 15px;
    border: none;
    text-decoration: none;

    &.active {
        text-decoration: underline;
    }
`;