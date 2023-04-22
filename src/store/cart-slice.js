import { createSlice} from '@reduxjs/toolkit';


const cartSlice= createSlice({
    name: 'cart',
    initialState: { 
        items: [],
        amount: 0,
        changed: false
    },
    reducers:{
        replaceCart(state, action){
            state.items= action.payload.items;
            state.amount= action.payload.amount;
        },
        addItemToCart(state,action){
            const newItem=action.payload;
            const existingItem= state.items.find(item => item.id === newItem.id)
            state.amount++;
            state.changed=true;
            if(!existingItem){
              state.items.push({
                  id: newItem.id,
                  price: newItem.price,
                  quantity: 1,
                  totalPrice: newItem.price,
                  name: newItem.title,
                })
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItem(state, action){
            const id= action.payload;
            const existingItem= state.items.find(item=> item.id === id);
            state.amount--;
            state.changed=true;
            if(existingItem.quantity === 1){
                state.items= state.items.filter( item => item.id !== id);
            }else{
                existingItem.quantity--;
                existingItem.totalPrice= existingItem.totalPrice - existingItem.price;
            }
        }
    }
});



export const cartAction= cartSlice.actions;
export default cartSlice;