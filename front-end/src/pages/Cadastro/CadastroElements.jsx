import styled from 'styled-components';

const CadastroElements = styled.div`
    display: flex;
    justify-content: center;
    

h1 {
    color: hsl(0, 0%, 20%);
    text-align: center;
    margin-bottom: 30px;
    border-width: medium;
    border-radius: 8px;      
}

fieldset {
    bottom: 0;
    height: 300px;
    width: 260px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 8px;
    background-color: hsl(0, 0%, 70%);

}

input {
    background-color: hsl(0, 0%, 20%);
    margin-bottom: 10px;
    width: 250px;
    height: 35px;
    display: flex;
    border-radius: 8px;
}

input::placeholder {
    font-size: medium
    } 

button {
    margin-top: 10px;
    text-align: center;
    font-size: 1.5em;
    background-color: hsl(0 0% 20%);
    color: hsl(0 0% 70%);
    width: 260px;
    height: 47px;
    position: relative;
    float: center;
    border-radius: 8px;
    padding: .5rem 1.5rem;


}

`;

export default CadastroElements;
