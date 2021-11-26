import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserInfo from './UserInfo';
// import { getAll } from "../../../back-end/src/api/services/userService";

function UserListForAdmin() {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then((resultado) => {
        const { data: { result } } = resultado;
        setUsersList(result);
      })
      .catch((error) => console.log(error));
    // setUsersList(updateUsersList);
    // console.log(updateUsersList);
  }, []);

  return (
    <div>
      { !usersList ? 'nenhum usuario cadastrado'
        : usersList.map((user) => <UserInfo user={ user } key={ user.id } />) }
    </div>
  );
}

export default UserListForAdmin;
