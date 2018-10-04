import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AllComponents from './../components';
import routesConfig from './config';

export default class CRouter extends Component {

    getdatas = config => {
        return Object.keys(routesConfig).map(key => {
            return routesConfig[key].map(q => {
                return this.getsubdata(q);
            })
        }
        )
    }
    getsubdata = r => {
        if (r.subs) {
            return r.subs.map(v => this.getsubdata(v));
        } else if (r.component) {
            return this.routeList(r);
        }
    }
    routeList = r => {
        let MyComponent = AllComponents[r.component];
        return (
            <Route
                key={r.route || r.key}
                exact
                path={r.route || r.key}
                component={(props) =>
                    <MyComponent {...props}/>
                }
            />
        )
    };
    render() {
        return (
            <Switch>
            {
                this.getdatas(routesConfig)
            }
            </Switch>
        )
    }
}