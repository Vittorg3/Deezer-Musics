import React, { useState, useEffect } from 'react';

import {
    PageArea, 
    MusicArea,
    Message,
    MessageImg,
    MessageText,
    LoadMoreFavorites
} from './styled';

import { useSelector } from 'react-redux';

import MusicCard from '../../components/patials/MusicCard';

import sadFace from '../../public/images/face.gif';

export default () => {
    const user = useSelector(state => state.user);

    const [musics, setMusics] = useState([]);

    useEffect(() => {
        const loadFavorite = async () => {
            if(user.favorite.length > 0) {
                setMusics([...user.favorite]);
            }
        };

        loadFavorite();
    }, []);

    return (
        <PageArea>
            <MusicArea>
                {musics.length > 0 && musics.map((i, k) => (
                   <MusicCard 
                        key={k}
                        id={i.id}
                        image={i.image}
                        title={i.title}
                        artist={i.artist}
                        duration={i.duration}
                        preview={i.preview}
                        link={i.link}
                    />
                ))}
                {!musics.length > 0 &&
                    <Message>
                        <MessageImg src={sadFace} />
                        <MessageText>Que pena! Você não gostou de nenhuma música.</MessageText>
                    </Message>
                }
            <LoadMoreFavorites id="watchFavorites" />
            </MusicArea>
        </PageArea>
    );
};