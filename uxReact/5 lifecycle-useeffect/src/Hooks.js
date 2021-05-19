import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Hooks = () =>{
  const [firstName, setName] = useState('alex');
  // useState initialize your state variable (firstName);
  // setName is function to update our state variable

  const [lastName, setLastName] = useState('');
  // const [age, setAge] = useState(20);
  // state var, function
  // reading/displaying state variable

    useEffect(() => {
      document.title = lastName;
    })

    const [post, setPost] = useState({});

    useEffect(() =>{
      fetchData();
    }, []);

   const fetchData = () =>{
      axios.get('http://jsonplaceholder.typicode.com/posts/7').then(res => {
        console.log(res.data);
        setPost(res.data);
      })
    }

   return(
    <div>
    <p>{firstName}</p>
    <p>{lastName}</p>
    <button onClick={()=> setName('harry')}>Click Here!</button>
    <button onClick={()=> setLastName('jenner')}>Click Here!</button>
    {post.title}
    <p>{post.body}</p>
     
    </div>
  )
}
export default Hooks;