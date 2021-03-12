


import styled from 'styled-components';






export const ListDesign = styled.div`

width:40%;

@media(max-width:1024px){
    width:50%;
}
@media(max-width:768px){
    width:70%;
    
}
@media(max-width:425px){
    font-size:0.7rem;
    
}




.label{
    width:70%;
    height:500px;
    background:#F3F4E5;
    box-shadow: 8px 8px 5px 0px rgba(0,0,0,0.75);
    border-radius:15px;

    @media(max-width:768px){
    width:100%;
}
}

.alert{
  
}

form{
    height:70%;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
   
   

}

.top{
    width:100%;
    height:15%;
    background:#40877C;
    border-radius:15px 15px 0 0;
    color:white;
    font-size:2rem;
    display:flex;
    justify-content:center;
    align-items:center;
    
}


.bottom{
    width:100%;
    height:15%;
    background:#DCDDCF;
    border-radius:0 0 15px 15px ;
}

.input-wrapper{
    width:80%;

    justify-content:flex-start;
    display:flex;

    input{   
        margin:0 20px;
        background:none;
        border:none;
        border-bottom:2px solid #C8C9BC;
        width:100%;
        &:focus{
            outline:none;
        }

        @media(max-width:768px){
            margin:0 5px;
}
       
    }
    select{
        background:none;
        border: 2px solid #C8C9BC
    }

 
    
}
.button-wrapper{
    text-align:center;
    width:80%;

    button{
       background:#C8C9BC
    }
    
}

`;