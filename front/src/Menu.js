import React from 'react'
import {MyContext} from "./Context";
class Menu extends React.Component{
    render() {
        let  style = {
            display:"inline-block",
            width:"15vw",
            height:"!00%",
            left: "0",
            float:"left",
            textDecoration: "none",
            margin: "25px",

        }
        return (
            <div style={style}>
                <MyContext.Consumer>
                    {()=>{
                        let styleLink = {
                            border: "1px solid white",
                            padding:"1%",
                            color:"black",
                            backgroundColor: "red",
                            width: "100%    ",
                            display: "block"
                        }
                        return (
                            <div style={{textAlign: "center", lineHeight: "2", paddingLeft:"3%"}}>
                                <a href={"/"} style={styleLink}>Главная</a><br/>
                                <a href={"/games"} style={styleLink}>Товары</a><br/>
                                <a href={"/about"} style={styleLink}>О нас</a><br/>
                                <a href={"/shops"} style={styleLink}>Наши магазины</a><br/>
                                <a href={"/registration"} style={styleLink}>Регистрация</a><br/>
                                <a href={"/admin"} style={styleLink}>Панедь администратора</a><br/>
                                <a href={"/reports"} style={styleLink}>Отчетность</a><br/>
                                <a href={"/workers"} style={styleLink}>Сотрудники</a><br/>
                            </div>)
                    }}
                </MyContext.Consumer>
            </div>
        );
    }
}
export default Menu
