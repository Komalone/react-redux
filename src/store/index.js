import {} from 'react-redux';
import {createStore} from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialCounterState= {
    counter: 0, 
    showCounter: true
};

const counterSlice= createSlice({
    name: 'count',  // name of createslice is must
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter= state.counter + action.payload;
        },
        toggleCounter(state) {
            state.counter= !state.counter;
        }
    }
})

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

//const store= createStore(counterSlice.reducer)
const store= configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});

export const counterAction= counterSlice.actions;
export const authAction= authAction.action;
// const storeReducer=(state =initialState, action)=>{
//     if(action.type === 'incrementby2'){
//         return {  
//             counter: state.counter + 2,
//             showCounter: state.showCounter
//         };
//        }
//        if(action.type === 'increase'){
//         return {  
//             counter: state.counter + action.amount,
//             showCounter:state.showCounter
//         };
//        }
//        if(action.type === 'decrement'){
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//        }
//        if(action.type === 'toggle'){
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//        }
//     return state;
// }
//const store= createStore(storeReducer)

export default store;