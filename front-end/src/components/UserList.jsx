import React from 'react';
import Table from 'react-bootstrap/Table';

function UserList() {
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
      </Table>
    </div>
  );
}

export default UserList;
