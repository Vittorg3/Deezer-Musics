import styled from 'styled-components';

export const Menu = styled.div`
    position: fixed;
    width: 220px;
    height: 100vh;
    background-color: #13192C;
`;

export const Logo = styled.img`
    width: 80%;
`;

export const MenuHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 170px;
`;

export const MenuNavigation = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 170px);
    padding: 10px 0;
`;

export const OptionNavigation = styled.div`
    display: flex;
    align-items: center;
    padding-left: 35px;
    width: 100%;
    height: 30px;
    cursor: pointer;
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 0.5);
    transition: all ease .2s;
    ${props => props.page 
    ? 'border-left: 4px solid #d63031; background-color: rgba(255, 255, 255, 0.1); color: #fff;' 
    : 'border-left: 4px solid rgba(0, 0, 0, 0.0)'
    };
    
    &:hover {
        color: #fff;
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

export const OptionName = styled.label`
    font-size: 13px;
    margin-left: 7px;
`;