import React, { useState, useEffect } from 'react';

import ReactAudioPlayer from 'react-audio-player';

import { useSelector, useDispatch } from 'react-redux';

import {
    MusicPlayer,
    MusicInfo,
    MusicBanner,
    MusicAbout,
    MusicName,
    MusicArtist,
    MusicPanel,
    MusicOptions,
    SeeCompleteMusicButton
} from './styled';


import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const IMAGE_BASE_URL = "https://cdns-images.dzcdn.net/images/cover/";

const IMAGE_SIZE_MEDIUM_URL = "/500x500-000000-80-0-0.jpg";
const IMAGE_SIZE_BIG_URL = "/1000x1000-000000-80-0-0.jpg";

const stylePlayer = {
    width: "90%",
};

const propertyIcon = {
    width: 30,
    height: 30,
    cursor: 'pointer',
    color: 'rgba(255, 255, 255, 0.6)'
};

export default () => {
    const [liked, setLiked] = useState(false);

    const dispatch = useDispatch();

    const music = useSelector(state => state.player);
    const user = useSelector(state => state.user);

    const addToFavorite = () => {
        if(!liked) {
            dispatch({
                type: 'SET_FAVORITE',
                payload: {
                    favorite: {
                        id: music.id,
                        link: music.link,
                        title: music.title,
                        image: music.image,
                        artist: music.artist,
                        duration: music.duration,
                        preview: music.musicPreview
                    }
                }
            });
            
            setLiked(true);
            return;
        }

        dispatch({
            type: 'REMOVE_FAVORITE',
            payload: {
                favorite: music.id
            }
        });

        setLiked(false);
    };

    const toMusicPage = () => {
        window.open(`${music.link}`);
    };

    useEffect(() => {
        const isFavorite = user.favorite.filter(favorite => favorite.id === music.id);
        isFavorite.length > 0 ? setLiked(true) : setLiked(false);
    }, [music]);
    
    return (
        <MusicPlayer open={music.playerOpen}>
            <MusicInfo>
                <MusicBanner image={`${IMAGE_BASE_URL}${music.image}${IMAGE_SIZE_MEDIUM_URL}`} />
                <MusicAbout>
                    <MusicName>{music.title}</MusicName>
                    <MusicArtist>{music.artist}</MusicArtist>
                </MusicAbout>
            </MusicInfo>
            <MusicPanel>
                <ReactAudioPlayer
                    className="playerMusic"
                    style={stylePlayer}
                    src={music.musicPreview}
                    autoPlay
                    controls
                />
            </MusicPanel>
            <MusicOptions>
                {liked && 
                    <FavoriteIcon 
                        onClick={addToFavorite}
                        style={{...propertyIcon, color: 'red'}}
                    />
                }
                {!liked &&
                    <FavoriteBorderIcon 
                        onClick={addToFavorite}
                        style={propertyIcon}
                    />
                }
                <SeeCompleteMusicButton onClick={toMusicPage}>Escute mais</SeeCompleteMusicButton>
            </MusicOptions>
        </MusicPlayer>
    );
};