import React, { useEffect } from "react";
import {useDispatch} from 'react-redux';
import axios from "axios";
import * as actions from '../Actions/action';

const Students = ()=> {
    const [stData, setStData] = React.useState([]);
    const dispatch = useDispatch();
    
    useEffect(() =>{
        fetchData();
      }, []);
     
      const fetchData = () =>{
      axios.get("./student.json").then((res) => {
        console.log(res.data);
        dispatch({
          type: actions.UPDATE_DATA,
          payload: res.data
        })
          setStData(res.data)}).catch((error) => {
            console.log('found an error');
        })
      }
   console.log(stData)
    return (
      <div className="App">
        
        <hr />
        <h3>function component</h3>
        
        {stData &&
            stData.map(({ userName, id }) => (
            <div key={id} className="row">
              userName:<strong>{userName}</strong>
            </div>
          ))}
        
      </div>
    );
  }
  export default Students;