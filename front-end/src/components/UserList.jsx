import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function UserList() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const request = await fetch('http://localhost:3001/users');
    const list = await request.json();
    setUsers(list);
  }

  useEffect(() => {
    getUsers();
  }, []);

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
            users.map((u, index) => (
              <tr key={ u.name }>
                <td>
                  { index + 1 }
                </td>
                <td>
                  { u.name }
                </td>
                <td>
                  { u.email }
                </td>
                <td>
                  { u.role }
                </td>
                <td>
                  <button type="button">
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
