


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



    form{
        height:70%;
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        position:relative;

    
        .input-wrapper{        
             
                
                border-bottom:2px solid #C8C9BC;
            input,select{
                margin:0px 5px;             
                outline:none;
                background:#e9ead7;
                border:none;


            }
           
        }

        .product-name-wrapper,
        .input-wrapper{
            width:80%;
            position:relative;
            height:53px;
            overflow:hidden;

            .product-name-input{   
            
                background:none;
                border:none;
                padding-top:15px;
                width:100%;
                height:100%;
                outline:none;
               

                &:focus + .product-name-label::after{
                    transform:translateX(0%);
                }

                &:valid + .product-name-label::after{
                    transform:translateX(0%);
                }
            

                &:focus +.product-name-label .span{
                    transform:translateY(-100%);
                    font-size:0.9rem; 
                }
                
                &:valid + .product-name-label .span{
                    transform:translateY(-100%);
                    font-size:0.9rem; 
                }     
            }

            .product-name-label{
                    position:absolute;
                    bottom:0px;
                    left:0%;
                    width:100%;
                    height:100%;
                    pointer-events:none;
                    border-bottom:2px solid #C8C9BC;
                    
                    
                    &::after{
                        content:"";
                        position:absolute;
                        height:100%;
                        width:100%;
                        border-bottom:3px solid #40877C;
                        left:0px;
                        bottom:-1px;
                        transform:translateX(-100%);
                        transition: all 0.3s ease;

                    }
                    .span{
                        position:absolute;
                        bottom:5px;
                        left:0px;
                        transition: all 0.3s ease;
                    }

                
            } 
        }
        .quantity-wrapper{
            input{
                width:55px;
            }
        }

    }


    .bottom{
        width:100%;
        height:15%;
        background:#DCDDCF;
        border-radius:0 0 15px 15px ;
    }

}
    `;