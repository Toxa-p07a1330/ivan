import React, {useState} from 'react';
let Shops = ()=>{

    const [data, setData] = useState({isLoaded: false});
    let wayToApi = "http://localhost:3001/select%20*%20from%20shops";
    if (!data.isLoaded){
        fetch(wayToApi).then(
            (reposnse)=>{
                reposnse.json().then((json)=>{
                    let newState = json;
                    console.log(json)
                    newState.isLoaded = true;
                    setData(newState);
                })
            },
            (reject)=>{
                console.log(reject)
            }
        )
    }
    else {
        return <div>
            <h2>Наши магазины</h2>
            <div>
                {data.map((val)=>{
                    let time = Date.now()/1000%86400;

                    let open = (time<val.closeTime && time>val.openTime);
                    let style = open?styleOpen:styleClose;
                    return <div style={style}>
                        <div>{val.address}   {!open?"(Закрыто)":""}</div>

                        <br/>
                    </div>
                })}
            </div>
        </div>
    }
    return <div>Loading</div>
}
export default Shops;

let styleOpen = {
    display:"block",
    color:"white"
}
let styleClose = {
    display:"block",
    color:"red"
}
