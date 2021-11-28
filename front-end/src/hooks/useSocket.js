import { useEffect } from 'react';

import Io from 'socket.io-client';

const io = Io('http://localhost:3001/', { autoConnect: false });

function useSocket(callback) {
  function setStatus(id, status) {
    io.emit('status', id, status);
  }

  useEffect(() => {
    io.connect();
    io.on('status', () => { callback(); });

    return () => {
      io.disconnect();
    };
  }, []);

  return { setStatus };
}

export default useSocket;
