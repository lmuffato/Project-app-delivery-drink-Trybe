import styled from 'styled-components';

export const LoginContainer = styled.div`
    position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;

  img {
  align-items: center;
  padding: 8px;
  width: 95%;
  }

  button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #bed895;
  font-size: 0.95rem;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 5px;
  letter-spacing: 4px;
  background-color: transparent;
  border: none
  }
`;

export const UserInput = styled.div`
  input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  
    &::placeholder{
      color: rgba(255, 255, 255, 0.671);
  }
}

`;
