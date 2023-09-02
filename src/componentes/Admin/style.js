import { styled } from "styled-components";



const Wrapper = styled.section`
.top {
  display: flex;
    flex-direction: column;
    align-items: center;
    background: #f4f4f4;
    height: 50px;
    margin-top: 12px;
}
header h1 {
  background :  #f4f4f4;
  padding : 10px;
  text-align : center;
  border:none;
}
a {
  font-size: 17px;
  text-align: end;
  text-decoration: none;
  padding: 10px;
}
.admin-form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 9vh;
}
a.log {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: auto;
  margin-top: 10px;
  text-align: center;
}

h2 {
  margin-top: 0;
  text-align: center;
  padding: 10px;
}

.admin-form {
  display: flex;
  flex-direction: column;
}


.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="password"] {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
`
export default Wrapper