import { uiAction } from './ui-slice';
import { cartAction } from './cart-slice';

export const fetchCartData=()=>{
    return async(dispatch) =>{
        const fetchData=async()=>{
            const res = await fetch('https://cart-api-87764-default-rtdb.firebaseio.com/cart.json',
            );

            if(!res.ok){
                throw new Error('could not fetch cart data')
            }
            const data= await res.json();

            return data;
        }
        
        try{
           const cartData= await fetchData();
           dispatch(cartAction.replaceCart({
            items: cartData.items || [],
            amount: cartData.amount
           }))
        } catch (error){
            dispatch(uiAction.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed'
            }));
        }
    }
}

export const sendCartData= (cart)=>{
    return async(dispatch)=>{
        dispatch(uiAction.showNotification({
            status: 'pending',
            title: 'sending..',
            message: 'Sending cart data..'
          }))

        const sendRequest= async()=>{
          const res= await fetch('https://cart-api-87764-default-rtdb.firebaseio.com/cart.json', {
            method: 'PUT',
            body: JSON.stringify({
                items: cart.items,
                amount: cart.amount,
            }),
          });
          if(!res.ok){
            throw new Error('sending cart data failed..')
          }
        }

        try{
        await sendRequest();

        dispatch(uiAction.showNotification({
            status: 'success',
            title: 'success!',
            message: 'Sent cart data successfully'
          }));
        } catch(error){
            dispatch(uiAction.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed'
            }));
        }
    }
}