import React from 'react';
import PropTypes from 'prop-types';

const UserInformations = ({ user }) => {
  console.log(user);
  return (
    <div>
      <p data-testId={ `admin_manage__element-user-table-item-number-${user.id}` }>
        {user.id}
      </p>
      <p data-testId={ `admin_manage__element-user-table-name-${user.id}` }>
        {user.name}
      </p>
      <p data-testId={ `admin_manage__element-user-table-email-${user.id}` }>
        {user.email}
      </p>
      <p data-testId={ `admin_manage__element-user-table-role-${user.id}` }>
        {user.role}
      </p>
      {/* <button
        id={`${user.id}`}
        data-testid={ `admin_manage__element-user-table-remove-${user.id} }
      >
        Excluir
      </button> */}
    </div>
  );
};

UserInformations.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
};

export default UserInformations;
