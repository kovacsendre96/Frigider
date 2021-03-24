import styled from 'styled-components';


export const ListStyle = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;



.link{
    align-self:flex-start;
   color:green;
   font-size:2rem;
   text-align:center;
  
   @media(max-width:768px){
    font-size:1rem;
    }

img{
    height:120px;

    @media(max-width:768px){
        height:50px;
    }

    }
}

.side-bar{
    border: 1px solid black;
    height:400px;
    width:200px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    .capacity-wrapper{
        height:40%;
        .capacity-input-wrapper{
            display:flex;
            justify-content:space-around;
            input{
                width:55px;
                height:30px;
                }
        }

    }

    .filter{
        height:60%;
    }


}


.inside{

   
    width:70%;
    height:560px;
    display:flex;
    flex-direction:column;
    background:#D5D5D7;
    margin-left:100px;


    .fresh-food{
        height:40%;
           
       
    
        h2{
            text-align:center;
            border-bottom:1px solid blue;
        }
        

        
    }

    .middle-fresh-food{
        height:30%;
        
    }


    .expired-food{
        height:30%;
      overflow:hidden;
     
        

        h2{
            text-align:center;
            color:red;
            border-bottom:1px solid red;
        }
    }

    .food-items{
        width:100%;
        height:80%;
        display:flex;
        flex-wrap:wrap;
        overflow:scroll;
        &::-webkit-scrollbar {
        display: none;
        }
       
    }
 
    @media(max-width:768px){
    width:80%;
    margin-left:10px;
    }
}





`;



export const ListItemStyle = styled.div`
 width:60px;
 height:80px;
 margin:15px;
 border:1px solid black;
 background:white;
 border:none;
 border-radius:5px;
 cursor: pointer;
 transition:0.3s;
text-align:center;
display:flex;
flex-direction:column;


 
 &:hover{
     transform:scale(1.05);
     box-shadow:2px 2px 5px 0px rgba(0,0,0,0.75);
 }
 

 .middle{
    height:70%;
    width:100%;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
    
   
   

}

.top{
    width:100%;
    height:15%;
    background:#40877C;
    border-radius:5px 5px 0 0;
   
    
}


.bottom{
    width:100%;
    height:15%;
    background:#DCDDCF;
    border-radius:0 0 5px 5px ;
}
`;