import React, { useState, useEffect } from 'react';

import * as api from '../../api/api';

import {
    PageArea,
    SectionName,
    MusicArea,
    LoadMoreMusics,
    Message,
    MessageText,
    MessageImg
} from './styled';

import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import MusicCard from '../../components/patials/MusicCard';

import noResults from '../../public/images/result.gif';
import loading from '../../public/images/loading.gif';

export default () => {
    const searchInfo = useSelector(state => state.search);

    const [search, setSearch] = useState('');

    const [musicsLoaded, setMusicsLoaded] = useState(false);

    const [howPagesFiltered, setHowPagesFiltered] = useState(0);
    const [results, setResults] = useState(true);

    const [musics, setMusics] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);
    const [currentQueryPage, setCurrentQueryPage] = useState(0);

    useEffect(() => {
        const loadMusicResults = async () => {
            setMusicsLoaded(false);

            if(search.length > 0) { 
                if(searchInfo.type === 'track') {
                    const dataMusic = await api.getMusicByTrack(search, currentQueryPage);

                    if(!dataMusic.length > 0 && !musics.length > 0) {
                        setResults(false);
                    }

                    setMusics(musics => [...musics, ...dataMusic]);
                    setCurrentQueryPage(currentPage => currentPage + 1);
                    setMusicsLoaded(true);
                    return;
                }

                if(searchInfo.type === 'album') {
                    const dataMusic = await api.getMusicByAlbum(search, currentQueryPage);

                    if(!dataMusic.length > 0 && !musics.length > 0) {
                        setResults(false);
                    }

                    setMusics(musics => [...musics, ...dataMusic]);
                    setCurrentQueryPage(currentPage => currentPage + 1);
                    setMusicsLoaded(true);
                    return;
                }

                if(searchInfo.type === 'artist') {
                    const dataMusic = await api.getMusicByArtist(search, currentQueryPage);

                    if(!dataMusic.length > 0 && !musics.length > 0) {
                        setResults(false);
                    }

                    setMusics(musics => [...musics, ...dataMusic]);
                    setCurrentQueryPage(currentPage => currentPage + 1);
                    setMusicsLoaded(true);
                    return;
                }

                const dataMusic = await api.getMusicByArtist(search, currentQueryPage);

                if(!dataMusic.length > 0 && !musics.length > 0) {
                    setResults(false);
                }

                setMusics(musics => [...musics, ...dataMusic]);
                setCurrentQueryPage(currentPage => currentPage + 1);
                setMusicsLoaded(true);
                return;
                
            }
        };
        
        loadMusicResults();
    }, [howPagesFiltered]);

    useEffect(() => {
        const loadMusic = async () => {
            const dataMusic = await api.getTopMusic(currentPage);
            setMusics(musics => [...musics, ...dataMusic]);
            return;
        }

        loadMusic();
    }, [currentPage]);

    useEffect(() => {
        setResults(true);
        if(search.length <= 0) {
            const intersectionObserver = new IntersectionObserver((entries) => {
                if(entries.some(entry => entry.isIntersecting)) {
                    setCurrentPage(currentPage => currentPage + 1);
                }
            });
    
            intersectionObserver.observe(document.getElementById('watchMusics'));
    
            return () => intersectionObserver.disconnect();
        }

        if(search.length > 0) { 
            setResults(true);
            setCurrentQueryPage(0);
            setMusics([]); 

            const intersectionObserver = new IntersectionObserver((entries) => {
                if(entries.some(entry => entry.isIntersecting)) {
                    setHowPagesFiltered(current => current + 1);
                }
            });
    
            intersectionObserver.observe(document.getElementById('watchMusicsResults'));
    
            return () => intersectionObserver.disconnect();
        }
    }, [search]);

    useEffect(() => {
        if(search.length > 0) { 
            setResults(true);
            setCurrentQueryPage(0); 
            setMusics([]); 

            const intersectionObserver = new IntersectionObserver((entries) => {
                if(entries.some(entry => entry.isIntersecting)) {
                    setHowPagesFiltered(current => current + 1);
                }
            });
    
            intersectionObserver.observe(document.getElementById('watchMusicsResults'));
    
            return () => intersectionObserver.disconnect();
        }
    }, [searchInfo.type]);

    return (
        <PageArea>
            <Header setSearchQuery={setSearch}/>
            <SectionName className="Font-Section">As músicas que estão em alta</SectionName>
            <MusicArea>
                {musics.length > 0 && musics.map((i, k) => (
                    <MusicCard 
                        key={k}
                        id={i.id}
                        image={i.md5_image}
                        title={i.title_short}
                        artist={i.artist.name}
                        duration={i.duration}
                        preview={i.preview}
                        link={i.link}
                    />
                ))}
                {!musicsLoaded && 
                    <Message>
                        <MessageImg style={{height: 100}} src={loading} />
                    </Message>
                }
                {!results &&
                    <Message>
                        <MessageImg src={noResults} />
                        <MessageText>{`Nenhum resultado encontrado para "${search}"`}</MessageText>
                    </Message>
                }
            <LoadMoreMusics id="watchMusics"/>
            <LoadMoreMusics style={{width: "100%", height: 10}}id="watchMusicsResults"/>
            </MusicArea>
        </PageArea>
    );
};