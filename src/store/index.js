import {} from 'react-redux';
import {createStore} from 'redux';

const storeReducer=(state ={ counter: 0 }, action)=>{
    if(action.type === 'incrementby2'){
        return {  
            counter: state.counter + 2
        }
       }
       if(action.type === 'decrement'){
        return {
            counter: state.counter - 1
        }
       }
    return state;
}
const store= createStore(storeReducer)

export default store;