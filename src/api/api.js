import api from './connection';

export const getTopMusic = async (page) => {
    const musics = await api.get(`chart?index=${page * 10}&limit=${10}`);
    return musics.data.tracks.data;
};

export const getMusicByArtist = async (filterURL, page) => {
    const results = await api.get(`search?q=artist:"${filterURL}"&index=${page * 10}&limit=${10}`);
    return results.data.data;
};

export const getMusicByAlbum = async (filterURL, page) => {
    const results = await api.get(`search?q=album:"${filterURL}"&index=${page * 10}&limit=${10}`);
    return results.data.data;
};

export const getMusicByTrack = async (filterURL, page) => {
    const results = await api.get(`search?q=track:"${filterURL}"&index=${page * 10}&limit=${10}`);
    return results.data.data;
};


export const getMusicById = async (id) => {
    const music = await api.get(`track/${id}`);
    return music.data;
};