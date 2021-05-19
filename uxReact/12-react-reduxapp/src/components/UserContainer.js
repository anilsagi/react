import { useEffect } from 'react';
import { fetchUserSuccess } from '../actions';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { UserAddress } from './UserAdress';
import './ContainerStyles.css'

export const UserContainer = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.users);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      console.log(response);
      const users = response.data;
      dispatch(fetchUserSuccess(users));
    });
  },[]);

  return (
    <div className ="Containerstyle">
      {usersData.map((user) => {
        console.log(user.name);
        return (
          <div key={user.id}>
            <h5>Name:{user.name}</h5>
            <UserAddress user={user} />
          </div>
        );
      })}
    </div>
  );
};