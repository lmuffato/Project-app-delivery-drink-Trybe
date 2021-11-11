import { useContext } from 'react';
import ManagerUsersContext from '../context/ManagerUsersContext';

function useManagerUsersContext() {
  return useContext(ManagerUsersContext);
}

export default useManagerUsersContext;
