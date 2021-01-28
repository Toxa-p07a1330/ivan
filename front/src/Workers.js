import React, {useState} from 'react';
let Workers = ()=>{

    const [data, setData] = useState({isLoaded: false});
    let wayToApi = "http://localhost:3001/select%20*%20from%20workers";
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
            <h2>Наши сотрудники</h2>
            <div>
                {data.map((val)=>{
                    return <div style={{}}>
                        {val.fname} {val.sname} {val.tname}
                    </div>
                })}
            </div>
        </div>
    }
    return <div>Loading</div>
}
export default Workers;

let styleOpen = {
    display:"block",
    color:"white"
}
let styleClose = {
    display:"block",
    color:"red"
}
