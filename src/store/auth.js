
import {createStore} from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialAuthState= {
    isAuthentication: false
};

const authSlice= createSlice({
    name: 'Auth',
    initialState: initialAuthState,
    reducers:{
        login(state) {
            state.isAuthentication= true;
        },
        logout(state) {
            state.isAuthentication= false;
        }
    }
})

export const authAction= authAction.action;

export default authSlice.reducer;
