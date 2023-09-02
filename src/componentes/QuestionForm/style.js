import { styled } from "styled-components";

const Wrapper = styled.section`
margin : auto;
width : 70%;
display: block;
align-items: center;
text-align: center;

h1{   

    font-size: 1.4rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
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
form{
  margin: 30px auto;
  padding: 10px;
  width: 100%;
  max-width: 500px;
  min-width: 240px;
  background-color: #e4e4e4;
  display: block;
  border: 2px solid white;
  border-radius: 5px;
  box-shadow: 2px 2px 3px rgb(238 234 241);
}
input{
    width: 49%;
    padding: 10px;
    margin: 5px 0px;
    box-sizing: border-box;
}    
form input{
  width: 96%;
  min-width: 200px;
  padding: 9px;
  margin: 5px 0px;
  box-sizing: border-box;
}
form select{
  width: 52%;
  padding: 10px;
  margin: 5px 0px;
  text-align: center;
}
form input[type=button]{
  width: 33%;
  display: block;
  min-width: fit-content;
  margin: 5px auto;
  background-color: black;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  color: white;
    
}
div{
    width: 100%;


input[type=button]{
    width: 20%;
    display: block;
    min-width: fit-content;
    margin: 5px auto;
    background-color: black;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    color: white;
}
}
`
export default Wrapper