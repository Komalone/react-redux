import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
const Counter = () => {
  const counter=  useSelector(state=> state.counter);
  const dispatch= useDispatch()

  const incrementHandle=()=>{
    dispatch({type : 'incrementby2'})
  }

  const decrementHandle=()=>{
    dispatch({type : 'decrement'})
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter}--</div>
      <div>
        <button onClick={incrementHandle}>increment</button>
        <button onClick={decrementHandle}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
