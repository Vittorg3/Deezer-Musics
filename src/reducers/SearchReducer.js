const initialState = {
    type: ''
};

const SearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TYPE_SEARCH':
            return {...state, type: action.payload.type};
            break;
    }

    return state;
};

export default SearchReducer;