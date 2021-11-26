import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Typography,
  Container,
  Box,
} from '@mui/material';
import UserItemInList from './UserItemInList';
import { verifyUserExistance } from '../utils/LocalStorageFunctions';

function UsersList() {
  const [users, setUsers] = useState();
  const apiBaseUrl = 'http://localhost:3001';
  const { token } = verifyUserExistance();
  const headers = { Authorization: token };

  useEffect(() => {
    async function getUsers() {
      const res = await axios
        .get(`${apiBaseUrl}/users/admin`, { headers });
      setUsers(res.data);
    }
    getUsers();
  }, []);

  const handleRemoveUser = async (id) => {
    await axios.delete(`${apiBaseUrl}/users/${id}`, { headers });
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <Container
      sx={ {
        display: 'flex',
        flexDirection: 'column',
      } }
    >
      <Typography>
        Lista de usuários
      </Typography>
      <Box
        sx={ {
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        } }
      >
        { users && users.map((user, index) => (
          <UserItemInList
            { ...user }
            key={ index }
            itemIndex={ index + 1 }
            removeUser={ handleRemoveUser }
          />))}
      </Box>
    </Container>
  );
}

export default UsersList;
