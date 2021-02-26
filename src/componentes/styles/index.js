import styled from 'styled-components';
import Styled from 'styled-components';

export const Td = Styled.td`
border:1px solid black;
width:2rem;
`;

export const Bola = Styled.div`
background-color: white;
width: 8rem;
height: 8rem;
border-radius: 100%;
border: 15px solid #2694d5;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
margin-top: 3rem;

box-shadow: 1px -3px 23px 10px rgb(74 62 62);
-webkit-box-shadow: 1px -3px 23px 10px rgb(0 0 0 / 33%);
-moz-box-shadow: 1px -3px 23px 10px rgba(74,62,62,1);
`;

export const BolaContent = Styled.h1`
background-color: white;
border-radius: 50%;
padding: 27%;
border: 4px solid #2694d5;
width: 40px;
`;

export const ContainerPresentacion = Styled.div`
background : url("../bingoFondo.png");
height:100vh;

background-size: 138%;
background-repeat: no-repeat;
justify-content: center;
align-items: flex-end;
display:flex;
`;

export const ButtonIngresar = Styled.button `
border: 1px solid #2196f3;
padding: 0.3rem;
border-radius: 7px;
background-color:#2196f3;
margin: auto;
margin-bottom: 40px;

width: 20%;
height: 12%;
color: white;
font-weight: bold;
font-size: 19px;
transition: all 0.5s ease-out;

:hover{
    cursor:pointer;
    background-color: #3f51b5;
    border: 1px solid #3f51b5;
    font-size:1rem;
    padding: 0.8rem;
    transition: all 0.5s ease-out;
};

`;

export const SelectConfig = Styled.select`
height: 2rem;
border-radius: 18px;
background-color: #2196f3;
border: 1px solid #2196f3;
padding-left:4px;
font-size:17px;
color:white;
font-weight: bold;
text-align-last: center;
option{
    color:black;
    heigth:100px;
}
`;

export const Table = styled.table`

border: 1px solid black;
height: 136px;
width: 100%;
background-color: ${(props => props.color)}
`;

export const ContainerGanador= styled.div`

background : url("../confetti1.gif");
height:100vh;
display: flex;
align-items: center;
flex-direction: column;
`

export const ContainerImg = styled.div`
background : url("../bingoFondo.png");
height:100vh;
background-size: 138%;
background-repeat: no-repeat;
display: flex;
    justify-content: center;
    align-items: flex-end;
`;