import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch= useDispatch();
  const cart= useSelector((state)=> state.cart);

  const addToCart=()=>{
    dispatch(cartAction.addItemToCart({
      id, title, price
    }));
   
  
  /*--// for component level tranformation-------------
    const newTotalAmount= cart.amount +1;

    const updatedItems= cart.items.slice() // creating copy with slice for preventing mutation
    const existingItem= updatedItems.find((item)=> item.id === id);
    if(existingItem){
      const updateItem= {...existingItem};
      updateItem.quantity++;
      updateItem.price= updateItem.price + price;
      const existingItemIndex= updatedItems.findIndex(
        (item) => item.id === id
      );
      updatedItems[existingItemIndex]= updateItem;
    }else{
      updatedItems.push({
        id: id,
        price: price,
        quantity: 1,
        totalPrice: price,
        name: title,
      });
    }
    const newCart={
      items: updatedItems,
      amount: newTotalAmount
    }
    dispatch(cartAction.replaceCart(newCart)); ----*/
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
