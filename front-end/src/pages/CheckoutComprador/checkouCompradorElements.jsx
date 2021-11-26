import styled from 'styled-components';

const CheckoutContainer = styled.div`

h1 {
margin-left: 20px;
}

h3 {
text-align: center;
font-size: 2em;
margin-right: 190px;
margin-top: 40px;
padding-top: 15px;
background-color: hsl(0 0% 20%);
color: white;
width: 250px;
height: 50px;
position: relative;
float: right;
border-radius: 5px;
}

.fieldSet-1 {
padding-top: 50px;
margin-left: 30px;
margin-right: 30px;
}

.fildSet-2 {
padding-top: 20px;
margin-top: 30px;
margin-left: 30px;
margin-right: 30px;
}

form {
display: flex;
justify-content: space-around;
}

.label-vendedor {
display: block;
text-align: center;
}

select {
height: 40px;
width: 250px
}

button {
font-size: 1em;
display: block;
margin-top: 20px;
margin-left: auto;
margin-right: auto;
padding-top: 5px;
background-color: hsl(0 0% 20%);
color: white;
width: 250px;
height: 60px;
border-radius: 5px;
}
`;

export default CheckoutContainer;
