import styled from 'styled-components';

export const MusicPlayer = styled.div`
    display: ${props => props.open ? 'flex' : 'none'};
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;
    background-color: rgba(21, 31, 51, 0.9);
    color: #fff;
`;

export const MusicInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
`;

export const MusicBanner = styled.div`
    width: 50px;
    height: 50px;
    margin: 0 auto;
    border-radius: 0px 15px 0px 15px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const MusicAbout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 14px;
`;

export const MusicName = styled.label`
    margin-top: 5px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
`;

export const MusicArtist = styled.label`
    margin-top: 3px;
    color: rgba(255, 255, 255, 0.6);
`;

export const MusicPanel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    left: 20%;
    flex: 1;
`;

export const MusicOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 200px;
    height: 80px;
`;

export const SeeCompleteMusicButton = styled.button`
    outline: 0;
    border: 0;
    padding: 10px;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    border-radius: 10px;
    border: 0.5px solid rgba(255, 255, 255, 0.6);
    background-color: rgba(255, 255, 255, 0.0);
    transition: all ease .2s;

    &:hover {
        color: #000;
        background-color: #fff;
    }
`;