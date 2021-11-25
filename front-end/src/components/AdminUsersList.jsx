import React from 'react';

export default function AdminUsersList() {
  return (
    <section>
      <h5>Lista de usuários</h5>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-testid="admin_manage__element-user-table-item-number-1">1</td>
            <td data-testid="admin_manage__element-user-table-name-1">Fulana Pereira</td>
            <td
              data-testid="admin_manage__element-user-table-email-1"
            >
              fulana@deliveryapp.com
            </td>
            <td data-testid="admin_manage__element-user-table-role-1">P. Vendedora</td>
            <td data-testid="admin_manage__element-user-table-remove-1">Excluir</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
