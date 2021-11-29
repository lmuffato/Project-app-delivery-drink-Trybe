import styled from 'styled-components';

const StyledNavbar = styled.nav`
  width: 100vw;
  background-color: var(--dark-gray);

  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8vh;

    flex-direction: row;

    max-width: 900px;
    margin: 0 auto;
  }

  .container-links {
    display: flex;
    a {
      color: white;
    }
    
    a:hover {
      color: var(--orange);
    }
  }

  .container-links a {
    margin-right: 1rem;
  }

  .container-links a:hover {
    color: var(--orange);
  }

  div:nth-child(2) {
    display: flex;
  }

  span {
    color: white;
  }

  button {
    background-color: var(--orange);
    width: 100px;
    margin: 0 1.6rem 0 2rem;
    color: black;
  }
`;

export default StyledNavbar;
