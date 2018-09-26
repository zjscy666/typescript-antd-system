import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AllComponents from './../components';
import routesConfig from './config';

export default class CRouter extends Component {

    getdatas = routesConfig => {
        return Object.keys(routesConfig).map(key => {
            return routesConfig[key].map(r => {
                return this.getsubdata(r);
            })
        }
        )
    }
    getsubdata = r => {
        if (r.subs) {
            return r.subs.map(r => this.getsubdata(r));
        } else if (r.component) {
            return this.routeList(r);
        }
    }
    routeList = r => {
        let Component = AllComponents[r.component];
        return (
            <Route
                key={r.route || r.key}
                exact
                path={r.route || r.key}
                component={(props) =>
                    <Component {...props}/>
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