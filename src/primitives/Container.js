import styled from 'styled-components';
import { breakpoints } from '../../src/app/theme/variables';

const { small, medium, large, extraLarge } = breakpoints;
 
export default styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: ${small}) {
        max-width: 540px;
    }

    @media (min-width: ${medium}) {
        max-width: 720px;
    }

    @media (min-width: ${large}) {
        max-width: 960px;
    }

    @media (min-width: ${extraLarge}) {
        max-width: 1240px;
    }
`;