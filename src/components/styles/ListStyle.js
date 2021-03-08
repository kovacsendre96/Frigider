import styled from 'styled-components';


export const ListStyle = styled.div`
width:100%;
display:flex;
justify-content:space-around;


.inside{


    width:30%;
    height:700px;
    border:3px solid black;
    overflow-y:scroll;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    overflow-y:scroll;
   

}

.datas{
    width:25%;
    height:600px;


    .top{
        width:100%;
        height:15%;
        background:#40877C;
        border-radius:15px 15px 0 0;
    }

    .content{
        height:70%;
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        background:#F3F4E5;
        overflow-y:scroll;
    }


    
    .bottom{
        width:100%;
        height:15%;
        background:#DCDDCF;
        border-radius:0 0 15px 15px ;
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