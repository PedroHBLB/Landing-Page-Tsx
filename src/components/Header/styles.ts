import styled from 'styled-components';

export const Box = styled.header`
    margin-top: 30px;
    height: 42px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > img {
        width: 110px;
    }
`;

export const Menu = styled.ul`
    display: inline-block;
    color: ${props => props.theme.text.primary};
    margin-right: 25px;
    font-weight: 500;

    a {
        color: ${props => props.theme.text.primary};
    }
`

export const Button = styled.button`
    width: 130px;
    height: 42px;
    border: 1px solid ${props => props.theme.button.primary};
    color: ${props => props.theme.button.primary};
    border-radius: 4px;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    margin-left: 25px;
`