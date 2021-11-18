import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function UserList() {
  const [users, setUsers] = useState([]);
  const { token } = JSON.parse(localStorage.getItem('user'));

  async function getUsers() {
    const request = await fetch('http://localhost:3001/users');
    const list = await request.json();
    const filteredList = list.filter((e) => e.role !== 'administrator');
    setUsers(filteredList);
  }

  useEffect(() => {
    getUsers();
  }, []);

  async function handleClick(email) {
    const data = { email };
    const myBody = JSON.stringify(data);
    await fetch('http://localhost:3001/user', {
      method: 'DELETE',
      body: myBody,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
  }

  return (
    <div>
      <h2>Lista de usuários</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((u, i) => (
              <tr key={ u.name }>
                <td data-testid={ `admin_manage__element-user-table-item-number-${i}` }>
                  { i + 1 }
                </td>
                <td data-testid={ `admin_manage__element-user-table-name-${i}` }>
                  { u.name }
                </td>
                <td data-testid={ `admin_manage__element-user-table-email-${i}` }>
                  { u.email }
                </td>
                <td data-testid={ `admin_manage__element-user-table-role-${i}` }>
                  { u.role }
                </td>
                <td>
                  <button
                    data-testid={ `admin_manage__element-user-table-remove-${i}` }
                    onClick={ () => handleClick(u.email) }
                    type="button"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}

export default UserList;
