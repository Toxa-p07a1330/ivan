import React, {useState} from 'react'
import {MyContext} from "./Context";
let Reports = ()=>{
    let getById = (collection, id)=>{
        for (let i of collection)
            if (i.id === id)
                return i;
        return null;
    }
    let [data, setData] = useState({loadedNumber : 0});
    if (data.loadedNumber === 0) {
        let wayToApi = 'http://localhost:3001/SELECT * FROM CLIENTS'
        fetch(wayToApi).then((response)=>{
            response.json().then((json)=>{
                let localData = {...data};
                localData.clients = json;
                localData.loadedNumber++;
                setData(localData)

            }, (reject)=>{
                console.log(reject)
            })
        },
            reason => console.log(reason))
        return <div>loading clients</div>
    }
    if (data.loadedNumber === 1) {
        let wayToApi = 'http://localhost:3001/SELECT * FROM WORKERS'
        fetch(wayToApi).then((response)=>{
                response.json().then((json)=>{
                    let localData = {...data};
                    localData.workers = json;
                    localData.loadedNumber++;
                    setData(localData)
                    return <div>loading wokers</div>

                }, (reject)=>{
                    console.log(reject)
                })
            },
            reason => console.log(reason))

    }
    if (data.loadedNumber === 2) {
        let wayToApi = 'http://localhost:3001/SELECT * FROM SHOPS'
        fetch(wayToApi).then((response)=>{
                response.json().then((json)=>{
                    let localData = {...data};
                    localData.shops = json;
                    localData.loadedNumber++;
                    setData(localData)
                    return <div>loading shops</div>

                }, (reject)=>{
                    console.log(reject)
                })
            },
            reason => console.log(reason))

    }
    if (data.loadedNumber === 3) {
        let wayToApi = 'http://localhost:3001/SELECT * FROM Games'
        fetch(wayToApi).then((response)=>{
                response.json().then((json)=>{
                    let localData = {...data};
                    localData.games = json;
                    localData.loadedNumber++;
                    setData(localData)
                    return <div>loading games</div>

                }, (reject)=>{
                    console.log(reject)
                })
            },
            reason => console.log(reason))
    }
    if (data.loadedNumber === 4) {
        let wayToApi = 'http://localhost:3001/SELECT * FROM logs'
        fetch(wayToApi).then((response)=>{
                response.json().then((json)=>{
                    let localData = {...data};
                    localData.logs = json;
                    localData.loadedNumber++;
                    setData(localData)
                    return <div>loading logs</div>

                }, (reject)=>{
                    console.log(reject)
                })
            },
            reason => console.log(reason))

    }
    console.log(data)
    if (data.loadedNumber === 5) {
        return <div>
            <div style={reportStyle}>Название</div>
            <div style={reportStyle}>Кем продана</div>
            <div style={reportStyle}>Кому продана</div>
            <div style={reportStyle}>Когда проданв</div>
            <div style={reportStyle}>Где проданв</div>
            <br/>
            {data.logs.map((value)=>{
                return <div>
                    <div style={reportStyle}>{getById(data.games, value.gameId).name}</div>
                    <div style={reportStyle}>{getById(data.workers, value.sellerId).sname}</div>
                    <div style={reportStyle}>{getById(data.clients, value.buyerId).login}</div>
                    <div style={reportStyle}>{value.time}</div>
                    <div style={reportStyle}>{getById(data.shops, value.shopId).address}</div>
                </div>
            })}
        </div>
    }
    return <div>Loading</div>

}
let reportStyle = {
    display: "inline-block",
    width: "15%",
    borderBottom:"1px solid grey",
    paddingTop:"1%"

}
export default Reports
