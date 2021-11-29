import styled from 'styled-components';

const StyledLogin = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    border-radius: 15px;
  }

  button {
    border-radius: 15px;
  }

  @media(min-width: 1000px) {
    form {
      width: 400px;
      background-color: var(--dark-gray);
      padding: 4rem;
      border-radius: 0.4rem;
    }

    input {
    border-radius: 4px;
  }

  button {
    border-radius: 4px;
  }
  }
`;

export default StyledLogin;
