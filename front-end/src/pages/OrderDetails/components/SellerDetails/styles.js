import styled from 'styled-components';

const SectionDetails = styled.section`
  display: flex;
  font-weight: 600;
  justify-content: space-between;
  text-align: center;
  width: 60%;
  margin: 1rem auto 1rem auto;
  
  button {
    background-color: #F49F1C;
    border-radius: 6%;
    color: #DCD5CE;
    font-weight: 900;
    padding: 0.8%;
  }
  /* span :nth-of-type(1) {
    font-weight: 100;
  } */

  @media (max-width: 768px) {
    width: 80%;
  }


  @media (max-width: 400px) {
    width: 100%;
  }

`;

export default SectionDetails;
