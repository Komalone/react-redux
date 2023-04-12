import classes from './Counter.module.css';
import { 
  useDispatch, 
 useSelector, 
  //connect 
} from 'react-redux';
import { counterAction } from '../store/counter-slice'
//import { Component } from 'react';

const Counter = () => {
  const counter=  useSelector(state=> state.counter.counter);
  const dispatch= useDispatch()
  const show= useSelector(state=> state.counter.showCounter);

  const incrementHandle=()=>{
    //dispatch({type : 'incrementby2'})
    dispatch(counterAction.increment())
  }

  const increseHandler=()=>{
   // dispatch({type : 'increase', amount: 5})
   dispatch(counterAction.increase(5))
  }
  const decrementHandle=()=>{
    //dispatch({type : 'decrement'})
    dispatch(counterAction.decrement());
  }

  const toggleCounterHandler = () => {
    //dispatch({type: 'toggle'})
    dispatch(counterAction.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>-- {counter}--</div>}
      <div>
        <button onClick={incrementHandle}>increment</button>
        <button onClick={increseHandler}>increase by 5</button>
        <button onClick={decrementHandle}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//when working with class where hook cannot use

// class Counter extends Component{

//   incrementHandle(){
//     this.props.increment();
//   }
//   decrementHandle(){
//     this.props.decrement();
//   }
//   toggleCounterHandler(){

//   }
//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>-- {this.props.counter}--</div>
//         <div>
//           <button onClick={this.incrementHandle.bind(this)}>increment</button>
//           <button onClick={this.decrementHandle.bind(this)}>decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStatesToProps=(state)=>{
//   return {
//     counter: state.counter
//   };
// }
// const mapDispatchToProps=(dispatch)=>{
// return{
//   increment: ()=>dispatch({type : 'incrementby2'}),
//   decrement: ()=>dispatch({type: 'decrement'})
// };
// }

//export default connect(mapStatesToProps,mapDispatchToProps)(Counter);
