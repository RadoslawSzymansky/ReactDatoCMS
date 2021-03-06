import styled from 'styled-components';

export const H1 = styled.h1`
    font-size: 36px;
`;

export const H2 = styled.h2`
    font-size: 32px;
`;

export const H3 = styled.h3`
    color: ${ ({logo}) => logo ? 'hotpink' : ' #444' };
`;

export const H4 = styled.h4`
    font-size: 24px;
`;

export const H5 = styled.h5`
    font-size: 20px;
`;

export const H6 = styled.h6`
    font-size: 18px;
`;