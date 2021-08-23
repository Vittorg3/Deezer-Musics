import React, { useState } from 'react';

import {
    Menu,
    Logo,
    MenuHeader,
    MenuNavigation,
    OptionNavigation,
    OptionName
} from './styled';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import logo from '../../public/images/logo.png';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import LibraryMusicRoundedIcon from '@material-ui/icons/LibraryMusicRounded';

const propertyIcon = {
    width: 20,
    height: 20
};

export default () => {
    const history = useHistory();

    const [pageCurrent, setPageCurrent] = useState('');

    const goToPage = (page, currentPage) => {
        setPageCurrent(currentPage);
        history.push(`${page}`);
    };

    return (
        <Menu>
            <MenuHeader>
                <Logo src={logo} />
            </MenuHeader>
            <MenuNavigation>
                <OptionNavigation 
                    onClick={() => goToPage('/', 'home')}
                    page={pageCurrent === 'home'}
                >
                    <HomeRoundedIcon style={propertyIcon} />
                    <OptionName>PÁGINA INICIAL</OptionName>
                </OptionNavigation>
                <OptionNavigation 
                    onClick={() => goToPage('/favorite', 'favorite')}
                    page={pageCurrent === 'favorite'}
                >
                    <LibraryMusicRoundedIcon style={propertyIcon} />
                    <OptionName>SUAS FAVORITAS</OptionName>
                </OptionNavigation>
            </MenuNavigation>
        </Menu>
    );
};