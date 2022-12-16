import React from 'react';

import Logo from '../../assets/logo.svg';
import { Box, Menu } from './styles';

const Header: React.FC = () => {
    return (
        <Box>
            <div>
                <img src={Logo} alt="Logo"/>
            </div>
            <Menu><a href="#">Home</a></Menu>
            <Menu><a href="#">About us</a></Menu>
            <Menu><a href="#">How it works</a></Menu>
            <Menu><a href="#">Services</a></Menu>
            <Menu><a href="#">Contact</a></Menu>
            <Menu><a href="#">Enquiry</a></Menu>
        </Box>
    );
}

export default Header;