import { useSelector, useDispatch } from 'react-redux'
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { Fragment } from 'react';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-action';

let ifInitial= true;

function App() {
  const dispatch= useDispatch();
  const toggleBtn= useSelector(state => state.ui.cartVisible);
  const cart= useSelector( state => state.cart);
  const notification= useSelector(state=> state.ui.notification);
  console.log(notification);

  useEffect(()=>{
    dispatch(fetchCartData())
  },[dispatch])

  useEffect(()=>{
    
  if(ifInitial){
    ifInitial= false;
    return;
  }
  if(cart.changed){
  dispatch(sendCartData(cart));
  }
  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && <Notification 
      status={notification.status} 
      title={notification.title}
      message={notification.message}
      />}
    <Layout>
      {toggleBtn && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
