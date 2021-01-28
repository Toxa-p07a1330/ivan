import React from 'react'
class Registration extends React.Component{
    render() {
        let style = {

        }
        let reg = ()=>{
            let l = document.getElementById("l").value;
            let p = document.getElementById("p").value;
            let i = document.getElementById("f").value;
            let f = document.getElementById("i").value;
            let o = document.getElementById("o").value;
            let e = document.getElementById("e").value;
            let t = document.getElementById("t").value;

            let request = `
            INSERT INTO CLIENTS (LOGIN, PASSWORD, FNAME, SNAME, TNAME, EMAIL, PHONE) VALUES
            ('${l}', '${p}','${f}','${i}','${o}','${e}','${t}')`;
            alert(request)
            fetch("http://localhost:3001/"+request).then((respp)=>{console.log(respp)})
        }
        return (
            <div style={style}>
                <div>
                    <div>Логин</div>
                    <input type={"text"} id={"l"}/>
                </div>
                <div>
                    <div>Пароль</div>
                    <input id={"p"} type={"text"}/>
                </div>
                <div>

                    <div>Фамилия</div>
                    <input type={"text"} id={"f"}/>
                </div>
                <div>

                    <div>Имя</div>
                    <input type={"text"} id={"i"}/>
                </div>
                <div>

                    <div>Отчество</div>
                    <input type={"text"} id={"o"}/>
                </div>
                <div>

                    <div>Почта</div>
                    <input type={"text"} id={"e"}/>
                </div>
                <div>

                    <div>Телефон</div>
                    <input type={"text"} id={"t"}/>
                </div>
                <button onClick={reg}>Регистрация</button>
            </div>
        );
    }
}
export default Registration
