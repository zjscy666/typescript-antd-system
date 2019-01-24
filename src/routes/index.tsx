import  * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllComponents from './../components';
import routesConfig from './config';
import { Ir } from '../utils/declare';

interface Im {
	menus: Ir[];
}

export default class CRouter extends React.Component<{}, {}> {

    public myCprops = (props: {}, MyComponent: string) => () => {
        return  <MyComponent {...props}/>
    };

    public getdatas = (config: Im) => {
        return Object.keys(routesConfig).map(key => {
            return routesConfig[key].map((q: Ir) => {
                return this.getsubdata(q);
            })
        }
        )
    }
    public getsubdata = (r: Ir)  : any  => {
        if (r.subs) {
            return (r.subs).map(v => this.getsubdata(v))
        } else if (r.component) {
            return this.routeList(r)!;
        } else {
            return  <></>;
        };
    }
    public routeList = (r: Ir) => {
        const MyComponent = r.component && AllComponents[r.component];
        return (
            <Route
                key={r.key}
                exact={true}
                path={r.key}
                component={this.myCprops(this.props, MyComponent)}
            />
        )
    };
    public render() {
        return (
            <Switch>
            {
                this.getdatas(routesConfig)
            }
            </Switch>
        )
    }
}