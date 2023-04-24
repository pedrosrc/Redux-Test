import  { useDispatch } from 'react-redux'
import { increment, incrementAmount } from './Features/Counter/counter-slice';
import { useAppSelector } from './hooks';

function App() {
 
const count =  useAppSelector(state => state.counter.value)
const dispatch = useDispatch(); 

  function handleClick(){
    //increment();
    //dispatch({type: 'counter/increment'})
    dispatch(increment())
  }
  function handleClickAmount(){
    //incrementAmount(5);
    //dispatch({type: 'counter/incrementAmount', payload: 5})
    dispatch(incrementAmount(5))
  }
  
  return (
    <div>
      <h1>Hello World!</h1>
      <span>Count is {count}</span>
      <button onClick={handleClick}>Btton</button>
      <button onClick={handleClickAmount}>Amount</button>
    </div>
  )
}

export default App;

{/* 

OLD SCHOOL

const mapStateToProps = (state:any) => {
  return{
    count: state.counter.value
  }
}

const mapDispachToProps = (dispatch) =>{
  return{
    increment: () => dispatch({type: 'counter/increment'}),
    incrementAmount: (amount) => dispatch({type: 'counter/incrementAmount', payload: amount})
  }
}


export default connect(mapStateToProps, mapDispachToProps)(App)
*/}