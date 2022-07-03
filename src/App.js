import './App.css';

import {useSelector, useDispatch} from 'react-redux';
import {increment, isOnline} from './actions/index'



function App() {
  const counter = useSelector(state => state.counter);
  const login = useSelector(state => state.login);
  //console.log(counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h3>Counter: {counter}</h3>
      <button onClick={() => dispatch(increment())}>Aumenta</button>
      
      <div>{login ? <h3>Utente loggato!</h3> : <h3>Utente non loggato</h3>}</div>
      <button onClick={() => dispatch(isOnline())}>Esegui login</button>
    </div>
  );
}

export default App;