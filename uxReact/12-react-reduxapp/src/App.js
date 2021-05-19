import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, logInUser, logOutUser } from './actions';
import { UserContainer } from './components/UserContainer';


function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  //const users = ['Anil', 'rajesh', 'Eswari', 'Chandhini'];

  const handleIncrement = () => {
    dispatch(increment(10));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleLogIn = () => {
    dispatch(logInUser());
  };

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <div className="App">
      {/*Test Redux
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br/> <br/>
      <button onClick={handleLogIn}>LogIn</button>
      <button onClick={handleLogOut}>LogOut</button>
      <h3>islogged:{isLogged.toString()}</h3> 
      {isLogged ? <h3>User login</h3> : <h3>UserLoggedOut</h3>}
      { users.map((user, index) =>{
        return <p>{user}- {index} </p>
      } ) }*/}
      <UserContainer/>
     

    </div>
  );
}

export default App;
