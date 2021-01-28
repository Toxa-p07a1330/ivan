import React, {useState} from 'react'
let Games = ()=>{
    const [data, setData] = useState({isLoaded: false});
    let wayToApi = "http://localhost:3001/select%20*%20from%20games";
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
        let localData = {...data};
        delete localData.isLoaded;
        return(<div style={{display:"inline-block", width:"80%"}}>
            <div>
                <h3>Новые</h3>
                <div>
                    <div style={gameStyle}>Название</div>
                    <div style={gameStyle}>Жанр</div>
                    <div style={gameStyle}>Цена</div>
                    {data.filter((val)=>{return val.category === "New Releases"})
                        .map((value)=>{
                            return <div>
                                <div style={gameStyle}>{value.name}</div>
                                <div style={gameStyle}>{value.subcategory}</div>
                                <div style={gameStyle}>{value.price}</div>
                                <br/>
                                <div style={styleInlineBlock}><img src={value.image} style={{width:50, height: 50,}}></img></div>
                                <div style={{display:"inline-block"}}>{value.description}</div>
                            </div>
                        })}
                </div>
            </div>
            <div>
                <br/>
                <h3>Популярные</h3>
                <div>
                    <div style={gameStyle}>Название</div>
                    <div style={gameStyle}>Жанр</div>
                    <div style={gameStyle}>Цена</div>
                    {data.filter((val)=>{return val.category === "Popular"})
                        .map((value)=>{
                            return <div>
                                <div style={gameStyle}>{value.name}</div>
                                <div style={gameStyle}>{value.subcategory}</div>
                                <div style={gameStyle}>{value.price}</div>
                                <br/>
                                <div style={styleInlineBlock}><img src={value.image} style={{width:50, height: 50,}}></img></div>
                                <div style={{display:"inline-block"}}>{value.description}</div>
                            </div>
                        })}
                </div>
            </div>
            <div>
                <br/>
                <h3>Бесплатные</h3>
                <div>
                    <div style={gameStyle}>Название</div>
                    <div style={gameStyle}>Жанр</div>
                    <div style={gameStyle}>Цена</div>
                    {data.filter((val)=>{return val.category === "Free to Play"})
                        .map((value)=>{
                            return <div>
                                <div style={gameStyle}>{value.name}</div>
                                <div style={gameStyle}>{value.subcategory}</div>
                                <div style={gameStyle}>{value.price}</div>
                                <br/>
                                <div style={styleInlineBlock}><img src={value.image} style={{width:50, height: 50,}}></img></div>
                                <div style={{display:"inline-block"}}>{value.description}</div>
                            </div>
                        })}
                </div>
            </div>

        </div>)
    }
    return (<div>Loading</div>)
}
let gameStyle = {
    display:"inline-block",
    width:"27%",
    borderBottom:"1px solid grey",
    paddingTop:"1%"
}
let styleInlineBlock = {
    display: "inline-block"
}
export default Games;
