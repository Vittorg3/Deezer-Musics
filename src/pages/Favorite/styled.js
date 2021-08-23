import styled from 'styled-components';

export const PageArea = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    width: calc(100% - 220px);
    height: 100vh;
    background-color: #191F33;
`;

export const MusicArea = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    margin-top: 20px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1);
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.2);
    }
`;

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    align-self: center;
`;

export const MessageImg = styled.img`
    width: 200px;
    background-color: #2C3547;
`;

export const MessageText = styled.label`
    font-size: 20px;
    margin-top: 20px;
    color: rgba(255, 255, 255, 0.5);
`;

export const LoadMoreFavorites = styled.div``;