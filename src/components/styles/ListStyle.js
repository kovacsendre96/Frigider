import styled from 'styled-components';


export const ListStyle = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;


.inside{


    width:30%;
    height:700px;
    border:3px solid black;
    display:flex;
    flex-direction:column;


    .fresh-food{
        height:50%;
            overflow-y:scroll;
       
    
        h2{
            text-align:center;
            border-bottom:1px solid blue;
        }
        
        .fresh-food-items{
         
      display:flex;
      flex-wrap:wrap;
        
        }
        
    }

    .middle-fresh-food{
        height:30%;
        overflow-y:scroll;
    }


    .expired-food{
        height:20%;
        overflow-y:scroll;
        flex-wrap:wrap;

        h2{
            text-align:center;
            color:red;
            border-bottom:1px solid red;
        }
    }
   

}





`;



export const ListItemStyle = styled.div`
 width:60px;
 height:40px;
 margin:15px;
 border:1px solid black;
 cursor: pointer;
`;