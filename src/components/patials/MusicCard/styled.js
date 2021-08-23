import styled from 'styled-components';

export const MusicCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 280px;
    padding: 10px;
    filter: drop-shadow(0px, 15px, 21px, red);
    border-radius: 40px 0px 40px 0px;
    cursor: pointer;
    transform: scale(0.9);
    transition: all ease .2s;
    margin: 0 10px;

    &:hover {
        transform: scale(1.0);
        background-color: #19253C;
    }
`;

export const MusicImage = styled.div`
    width: 90%;
    height: 75%;
    margin: 0 auto;
    border-radius: 40px 0px 40px 0px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export const MusicName = styled.label`
    margin-top: 5px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
`;

export const MusicArtist = styled.label`
    margin-top: 5px;
    color: rgba(255, 255, 255, 0.6);
`;

export const MusicBanner = styled.div`
    width: 100%;
    height: 380px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;