import { combineReducers } from 'redux';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export interface LoginData{
    [x: string]: any;
}

export const loginSuccess = (loginData:LoginData) => ({
    type: LOGIN_SUCCESS,
    payload: loginData,
});

const userDataReducer = (state = null, action:any) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    userData: userDataReducer,
});

export default rootReducer;
