const initialState = {
    id: '',
    link: '',
    title: '',
    image: '',
    artist: '',
    duration: '',
    musicPreview: '',
    playerOpen: false
};

const PlayerReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PLAYER':
            return { ...state, ...action.payload};
            break;
        case 'CLOSE_PLAYER':
            return {...state, playerOpen: action.payload.playerOpen};
            break;
    }
    return state;
};

export default PlayerReducer;