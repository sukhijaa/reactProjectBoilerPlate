import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TestItem from "./routes/testItem/TestItem";

export default class Router extends React.Component {
    render() {
        return (
            <div className={''}>
                <BrowserRouter>
                    <Switch>
                        <Route path={'/testItem'} component={TestItem}/>
                        <Route component={TestItem}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}