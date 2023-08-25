import { styled } from "styled-components";



const Wrapper = styled.section`
margin:0;

.loginContainer{
    margin: 30px auto;
    display: flex;
    flex : 1;
    justify-content: center;
}
header h1 {
    background :  #f4f4f4;
    padding : 10px;
    text-align : center;
    border:none;
}
    form{
        width : 50%;
        border-radius: 5px;
        padding: 20px;
        background :  #f4f4f4;
}
span {
    font-size: 3vh;
}
a {
    width: 18%;
    margin: auto;
    border: 2px solid black;
    border-radius: 5px;
    float: inherit;
    font-size: 1.1rem;
    background-color: white;
    text-decoration: none;
    font-family: 'Lucida Sans','Lucida Sans Regular','Lucida Grande','Lucida Sans Unicode',Geneva,Verdana,sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: black
}
.top {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f6881e;
    height: 50px;
    margin-top: 12px;
}

     input{
        width : 100%;
        padding: 8px;
        margin : 10px auto;
        border-radius: 5px;
        border : 1px solid #ccc;
    }
     h2{
        color: black;
        padding: 5px auto;
        text-align: center;
    }
    .Button {
        width: 60%;
        
    }
    input[type="submit"] {
        width: 100%;
        background : #333;
        color : #fff;
        margin : 10px auto;
        padding: 8px;
        border-radius : 5px;
    }

    input[type="submit"]:hover {
        background : #444;
    }
    p{
        padding: 5px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 
        'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    
    @media(max-width:800px)
    {
        .loginContainer{
            flex-direction: column-reverse;
            align-items: center;
        }
        .btn{
            width: 50%;
            padding: 0;
           
    
        }


`
export default Wrapper