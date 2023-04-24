import  { useSelector, useDispatch} from 'react-redux'

function App() {
 
const count:any =  useSelector<any>(state => state.counter.value)
const dispatch = useDispatch();

  function handleClick(){
    //increment();
    dispatch({type: 'counter/increment'})
  }
  function handleClickAmount(){
    //ncrementAmount(5);
    dispatch({type: 'counter/incrementAmount', payload: 5})
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