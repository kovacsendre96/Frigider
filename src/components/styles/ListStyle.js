import styled from 'styled-components';


export const ListStyle = styled.div`
width:100%;
height:100vh;
display:flex;



.side-bar-close{
    transition:0.5s;
    width:60px;
    display:flex;
    justify-content:center;
   
   .hamburger{
       cursor:pointer;
   }

    .sider-bar-top{
        height:10%;
        width:100%;
        background:#E45340;
        display:flex;
        justify-content:space-around;
        align-items:center;}

    .filter,.capacity-wrapper,.link{
        display:none;
    }
}

.side-bar{
     
    width:25%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background:#fff;
    transition:0.5s;
  
    
 
    


    .sider-bar-top{
        height:10%;
        width:100%;
        background:#E45340;
        display:flex;
        justify-content:space-around;
        align-items:center;
        .hamburger{
       cursor:pointer;
   }
        
        .link{
            display:flex;
            align-items:center;
            justify-content:center;

        @media(max-width:768px){
            font-size:1rem;
            }

        img{
            height:80px;

            @media(max-width:768px){
                height:50px;
            }

            }
        }
            
            }

    .capacity-wrapper{
        height:45%;
        width:90%;
        display:flex;
        flex-direction:column;
        align-items:center;
        background:#f0f0f0f0;
        .capacity__top{
            height:20%;
            width:100%;
            background:orange;
            display:flex;
            align-items:center;
            justify-content:center;
            
        }
        .capacity-input-wrapper{
            display:flex;
            justify-content:space-around;
            height:30%;
            width:100%;
            align-items:center;
            justify-content:center;

            input{
                width:55px;
                height:30px;
                }
        }
        .capacity__bottom{
            height:50%;
            width:80%;
        }
        .capacity__bottom__indicator{
            width:100%;
            height:20%;
            background:grey;
            border-radius:15px;
        }
        .capacity__bottom__indicator__inside{
            height:100%;
            background :red;
            border-radius:15px  0px  0px 15px;
            display:flex;
            align-items:center;
            justify-content:center;

        }
       

    }

    .filter{
        height:30%;
        width:90%;
        display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    

}
  
    }


}
    .inside{

    
        width:100%;
        height:100vh;
        display:flex;
        flex-direction:column;
        background:#D5D5D7;
        


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
    
        
    p{
        font-size:1rem;
        line-height:15px;
        white-space: nowrap; 
            overflow: hidden;
            text-overflow: ellipsis; 
    }
    

    }

    .top{
        width:100%;
        height:15%;
        background:#40877C;
        border-radius:5px 5px 0 0;
        display:flex;
        justify-content:center;
        align-items:center;
    
       .icon{
           font-size:0.6rem;
           color:white;
       }
    }


    .bottom{
        width:100%;
        height:15%;
        background:#DCDDCF;
        border-radius:0 0 5px 5px ;
    }
    `;