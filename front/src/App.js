import  React from 'react'
import Context, {MyContext} from "./Context";
import Content from "./Content";
import Header from "./Header";
import Menu from "./Menu";
class App extends React.Component{
    constructor() {
        super();
        this.state  ={
            isLoaded: false,
            film: null,
            hall: null,
            place: null,
            price: null,
            ticket: null,
            schedule: null,
        }


    }
    render() {
        return (<div style={{backgroundColor: "#151719", color: "#c1caca", minHeight: "100vh"}}>
                {(()=>{
                    if (!this.state.isLoaded)
                    {
                        let basicString = "http://localhost:3001/";
                        let tables = ["film", "hall", "place","price", "ticket", "schedule"]
                        for (let i of tables)
                        {
                            if (this.state[i] === null){
                                fetch(basicString+"select * from "+i).then(
                                    (resolve)=>{
                                        resolve.json().then(
                                            (json)=>{
                                                let newState = this.state;
                                                newState[i] = json;
                                                console.log(json)
                                                newState.isLoaded = (newState.films !== null) && (newState.hall !== null) &&
                                                    (newState.places !== null) && (newState.price !== null) && (newState.ticket !== null) &&
                                                    (newState.schedule !== null);
                                                this.setState(newState);

                                            }, reason => {
                                                console.log(reason)
                                            })
                                    },
                                    (reject)=>{
                                       console.log(reject)
                                    })
                            }
                        }
                        return "Loading";
                    }
                    console.log("_____")

                    return (
                        <div>
                            <MyContext.Consumer>
                                {(context)=>{
                                    context.setData(this.state)
                                    return (
                                        <div>
                                            <Header/>
                                            <Menu/>
                                            <Content/>
                                    </div>)
                                }}
                            </MyContext.Consumer>
                        </div>
                    )
                })()}
            </div>
        )

    }
}

export default App;
