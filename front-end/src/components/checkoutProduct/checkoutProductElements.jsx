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


}

.nameItem {
    background-color: hsl(0, 0%, 80%);
    width: 350px;
    padding: 15px;
    font-size: larger;


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
    width: 80px;
    padding: 15px;
    font-size: larger;


}

.btnRemoveItem {
    height: 52px;
    margin-top: 19px;
    margin-left: 10px;

}
`;

export default CardProduct;
