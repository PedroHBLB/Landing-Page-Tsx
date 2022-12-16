import styled from 'styled-components';

export const Box = styled.header`
    margin-top: 30px;
    height: 42px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > img {
        width: 110px;
    }
`;

export const Menu = styled.ul `
    display: inline-block;
    color: ${props => props.theme.text.primary};
`