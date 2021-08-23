import React, { useState } from 'react';

import {
    MusicCard, 
    MusicImage,
    MusicName,
    MusicArtist
} from './styled';

import { useDispatch } from 'react-redux';

const IMAGE_BASE_URL = "https://cdns-images.dzcdn.net/images/cover/";

const IMAGE_SIZE_MEDIUM_URL = "/500x500-000000-80-0-0.jpg";
const IMAGE_SIZE_BIG_URL = "/1000x1000-000000-80-0-0.jpg";

export default ({ id, image, title, artist, duration, preview, link }) => {
    const dispatch = useDispatch();

    const handlePlayerMusic = () => {
        dispatch({
            type: 'SET_PLAYER',
            payload: {
                id,
                link,
                title,
                image,
                artist,
                duration,
                musicPreview: preview,
                playerOpen: true
            }
        });
    };

    return (
        <MusicCard onClick={handlePlayerMusic}>
            <MusicImage image={`${IMAGE_BASE_URL}${image}${IMAGE_SIZE_MEDIUM_URL}`} />
            <MusicName>{title}</MusicName>
            <MusicArtist>{artist}</MusicArtist>
        </MusicCard>
    );
};