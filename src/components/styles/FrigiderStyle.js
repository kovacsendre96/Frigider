import styled from 'styled-components';
import frigiderClose from '../styles/frigider-close.png';
import frigiderOpen from '../styles/frigider-open.png';

export const FrigiderStyle = styled.div`
width:40%;
height:600px;
/* border:1px solid black; */
display:flex;


.frigider{
    width:100%;
height:600px;
    background:url(${frigiderClose});
background-size:contain;
background-repeat:no-repeat;
cursor:pointer;
transition: 0.6s;


&:hover{
    background:url(${frigiderOpen});
background-size:contain;
background-repeat:no-repeat;
}


}



.frigide-rotate{
    animation:call 0.3s linear  ;
         
         @keyframes call {
             0%{transform:rotate(0deg);}
             50%{transform:rotate(4deg);}
             100%{transform:rotate(0deg);}
         }
}
`;
