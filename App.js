import Counter from './Counter'
import store from './store'
function App() {
 // const action = type => store.dispatch({type})
 //variable action with action.type
  const action = function (type){
    let action = {
      type: type
    }
    return store.dispatch(action)
  }
  return (
    //JSX
    <div className="App">
      <header className="App-header">
        <Counter
          //Add action.type consequently = state, increment, decrement, increment_asynce
          value={store.getState()}
          onIncrement={() => action('INCREMENT')}
          onDecrement={() => action('DECREMENT')} 
          onIncrementAsync={() => action('INCREMENT_ASYNC')}
        />
      </header>
    </div>
  );
}
export default App;
