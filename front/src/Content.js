import {MyContext} from "./Context";
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import React from 'react'
import Home from "./Home";
import Admin from "./Admin";
import Reports from "./Reports";
import Games from "./Games";
import Shops from "./Shops";
import About from "./About";
import Registration from "./Registration";
import Workers from "./Workers";



class Content extends React.Component{

    render() {
        let style = {
        }
        return(<div style={style}>
            <BrowserRouter>
                <Switch>
                    <Route path={"/about"} component={About}/>
                    <Route path={"/games"} component={Games}/>
                    <Route path={"/shops"} component={Shops}/>
                    <Route path={"/admin"} component={Admin}/>
                    <Route path={"/reports"} component={Reports}/>
                    <Route path={"/workers"} component={Workers}/>
                    <Route path={"/registration"} component={Registration}/>
                    <Route exact path={""} component={Home}/>
                </Switch>
            </BrowserRouter>
        </div>)
    }
}
export default Content;
