import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
`;

export const InputArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IconInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 41px;
    background-color: rgba(0, 0, 0, 0.0);
`;

export const SearchInput = styled.input`
    width: 300px;
    height: 39px;
    outline: 0;
    border: 0;
    color: #fff;
    padding-left: 10px;
    background-color: rgba(0, 0, 0, 0.0);

    &::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
`;


export const SearchSelector = styled.div`
    margin: 0 10px;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    transition: all ease 1s;
    border: 1px solid rgba(0, 0, 0, 0.0);

    ${props => props.actived && 'border: 1px solid #d63031;'}
`;