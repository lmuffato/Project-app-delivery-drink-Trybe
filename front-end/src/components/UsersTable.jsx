import React, { useContext } from 'react';
import { UsersContext } from '../contexts/Users';

const tableHeaders = ['Item', 'Nome', 'E-mail', 'Tipo', 'Excluir'];

function UsersTable() {
  const { usersList, removeUser } = useContext(UsersContext);

  return (
    <table>
      <thead>
        { tableHeaders.map((header, index) => (<th key={ index }>{header}</th>))}
      </thead>
      <tbody>
        {
          usersList.map(({ id, email, name, role }, index) => (
            <tr key={ index }>
              <td data-testid="admin_manage__element-user-table-item-number-">{index}</td>
              <td data-testid="admin_manage__element-user-table-name-">{name}</td>
              <td data-testid="admin_manage__element-user-table-email-">{email}</td>
              <td data-testid="admin_manage__element-user-table-role-">{role}</td>
              <button
                type="button"
                data-testid="admin_manage__element-user-table-remove-"
                onClick={ () => removeUser(id) }
              >
                Excluir
              </button>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default UsersTable;
