import React, { useState } from 'react';

import {
    Header,
    InputArea,
    SearchInput,
    IconInput,
    SearchSelector
} from './styled';

import { useDispatch } from 'react-redux';

import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

const propertyIcon = {
    width: 25,
    height: 25,
    color: 'rgba(255, 255, 255, 0.5)'
};

export default ({ setSearchQuery }) => {
    const dispatch = useDispatch();

    const [search, setSearch] = useState('');
    const [typeSearch, setTypeSearch] = useState('');

    const handleSearch = () => {
        setSearchQuery(search);
    };

    const handleSelectTypeSearch = (type) => {
        setTypeSearch(type);

        dispatch({
            type: 'SET_TYPE_SEARCH',
            payload: {
                type: type
            }
        });
    };

    return (
        <Header>
            <InputArea>
                <IconInput>
                    <SearchRoundedIcon  style={propertyIcon} />
                </IconInput>
                <SearchInput
                    onKeyUp={e => e.code === 'Enter' && handleSearch()}
                    onChange={e => setSearch(e.target.value)} 
                    placeholder="Procure por músicas, albums ou artistas"
                />
            </InputArea>
            <InputArea>
                <SearchSelector 
                    actived={typeSearch === 'artist'}
                    onClick={() => handleSelectTypeSearch('artist')}
                >Artista</SearchSelector>
                <SearchSelector 
                    actived={typeSearch === 'album'}
                    onClick={() => handleSelectTypeSearch('album')}
                >Album</SearchSelector>
                <SearchSelector 
                    actived={typeSearch === 'track'}
                    onClick={() => handleSelectTypeSearch('track')}
                >Música</SearchSelector>
            </InputArea>
        </Header>
    );
}