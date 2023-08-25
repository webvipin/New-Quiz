import { styled } from "styled-components";



const Wrapper = styled.section`
//@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;900&family=Montserrat:wght@200&family=Poppins:ital,wght@0,100;0,200;1,100;1,900&family=Roboto:wght@100&display=swap');
//@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;900&family=Montserrat:wght@200&family=Poppins:ital,wght@0,100;0,200;1,100;1,900&family=Roboto:wght@100&display=swap');
.title
{
    text-transform: uppercase;
    font-size: 8vw;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    cursor: pointer;
}
.top {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f4f4f4;
    height: 50px;
    margin-top: 12px;
}
.divider
{
    margin: 20px;
    width: 100%;
    background-color: rgb(176, 175, 175);
}
a.title {
    color: wheat;
    text-decoration: none;
    font-family: serif;
    height: 100px;
    background: rgb(16, 16, 16);
    color: white;
}
.setting
{
    font-size: 30px;
}
.contact
{
    display: flex;
    justify-content: space-around;

}
.setting
{
    width: 45%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Poppins", sans-serif;
    font-family: 300;
}
.banner
{
  width: 55%;
  align-self: center;
  padding: 8px;
}
@media(max-width:800px)
{
    .contact{
        flex-direction: column-reverse;
        align-items: center;
    }
    .banner{
        width: 85%;
        padding: 0;
        padding-top:20px;

    }
    .setting{
        width: 100%;
    }
}
.setting_select
{
    display: flex;
    flex-direction:column;
    padding: 20px;
    width: 100%;
    flex: 0.8;
    justify-content: space-evenly;

}`
export default Wrapper