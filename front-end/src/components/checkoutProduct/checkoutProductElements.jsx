import styled from 'styled-components';

const CardProduct = styled.p`
display: flex;
justify-content: center;
margin: -30px 30px;
text-align: center;
}

.numberItem {
    background-color: hsl(0, 0%, 20%);
    color: hsl(0, 0%, 100%);
    width: 50px;
    padding: 15px;
    font-size: larger;
    border-radius:  8px 0px 0px 8px;
}

.nameItem {
    background-color: hsl(0, 0%, 80%);
    width: 350px;
    padding: 15px;
    font-size: larger;
    text-align: left;
}

.quantityItem {
    background-color: hsl(0, 0%, 70%);
    width: 80px;
    padding: 15px;
    font-size: larger;
}

.priceItem {
    background-color: hsl(0, 0%, 60%);
    width: 80px;
    padding: 15px;
    font-size: larger;
}

.subTotalItem {
    background-color: hsl(0, 0%, 50%);
    color: hsl(0, 0%, 100%);
    width: 80px;
    padding: 15px;
    font-size: larger;
}

.btnRemoveItem {
    background-color: hsl(0, 0%, 20%);
    color: hsl(0, 0%, 100%);    
    width: 110px;
    height: 52px;
    margin-top: 19px;
    border-radius:  0px 8px 8px 0px;
}
`;

export default CardProduct;
