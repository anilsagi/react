import React, {useState} from 'react';

const App = () =>{
  const [firstName, setName] = useState('alex');
  // useState initialize your state variable (firstName);
  // setName is function to update our state variable

  const [lastName, setLastName] = useState('');
  // const [age, setAge] = useState(20);
  // state var, function
  // reading/displaying state variable
   return(
    <div>
    <p>{firstName}</p>
    <p>{lastName}</p>
    <button onClick={()=> setName('harry')}>Click Here!</button>
    <button onClick={()=> setLastName('jenner')}>Click Here!</button>
      Happy Coding!
    </div>  
  )
}
export default App;
