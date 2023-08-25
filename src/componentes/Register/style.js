import { styled } from "styled-components";

const Wrapper = styled.section`
margin:0;
// width: fit-content;
// align-items:center;

.signinContainer{
margin: 30px auto;
display: flex;
flex : 1;
justify-content: center;
}

.top {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f4f4f4;
    height: 50px;
    margin-top: 12px;
}
form {
    width : 50%;
    border-radius: 5px;
    padding: 20px;
    background :  #f4f4f4;
    
}
span {
    font-size: 3vh;
}
p {
   
    margin-top: 0;
    margin-bottom: 1rem;
}
       

 a {
    width: 15%;
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
input {
       width : 100%;
       padding: 8px;
       margin : 10px auto;
       border-radius: 5px;
       border : 1px solid #ccc;
    }

select {
        padding: 8px;
        border-radius: 5px;
        margin: 10px auto;
        width: 100%;
    }

.Button{
        width: 100%;
        margin: auto;
        border-radius: 2px;
        display: block;
        font-size: 1.1rem;
        justify-content: center;
        color: white;
        background-color: #AA4465;
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
    @media(max-width:800px)
{
    .signinContainer{
        flex-direction: column-reverse;
        align-items: center;
        height:80vh
    }
    .run{
        width: 50%;
        padding: 0;
       

    }
    
}

`;
export default Wrapper;
