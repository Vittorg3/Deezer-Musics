const initialState = {
    favorite: []
};

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_FAVORITE':
            return { ...state, favorite: [...state.favorite, action.payload.favorite]};
            break;
        case 'REMOVE_FAVORITE':
            const favorites = state.favorite.filter(favorite => favorite.id !== action.payload.favorite);
            return {...state, favorite:[...favorites]};
            break;
    }       

    return state;
};

export default UserReducer;