import React, { useEffect, useState } from 'react';
import getAllUsers from '../../services/getUsersFromServer/getAllUsers';

export default function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((data) => setUsers(data));
  }, [users]);

  const handleDelete = async (e, x) => {
    console.log(x);
  };

  return (
    <table>
      <tr>
        <th>Item</th>
        <th>E-mail</th>
        <th>Tipo</th>
        <th>Excluir</th>
      </tr>
      { users.map((user, index) => (
        <tr key={ index }>
          <td>{ index }</td>
          <td>{ user.name }</td>
          <td>{ user.email }</td>
          <td>
            <button
              type="button"
              onClick={ (_e) => handleDelete(_e, user.email) }
            >
              Excluir
            </button>
          </td>
        </tr>
      )) }
    </table>
  );
}
