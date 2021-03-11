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
 

img{
    height:120px;

    
    }
}


.inside{


    width:30%;
    height:700px;
    display:flex;
    flex-direction:column;
    background:#D5D5D7;
    margin-left:100px;


    .fresh-food{
        height:50%;
           
       
    
        h2{
            text-align:center;
            border-bottom:1px solid blue;
        }
        

        
    }

    .middle-fresh-food{
        height:30%;
        
    }


    .expired-food{
        height:20%;
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
 

}





`;



export const ListItemStyle = styled.div`
 width:60px;
 height:40px;
 margin:15px;
 border:1px solid black;
 background:white;
 border:none;
 cursor: pointer;
 transition:0.3s;
text-align:center;


 
 &:hover{
     transform:scale(1.05);
     box-shadow:2px 2px 5px 0px rgba(0,0,0,0.75);
 }
 
`;