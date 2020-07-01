const initialState = {
    isAuthenticated: null,
    user: null
}
export default function authReducer(state = {}, action) {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                isAuthenticated: action.payload,
                user: action.payload
            }
        default:
            return state;
    }
}