import * as React from 'react';
import routesConfig from '../routes/config';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const Item = Menu.Item;
const menus = routesConfig.menus;


interface IOwnProps {
	theme : string;
	mode: string;
}

interface Ir {
	key: string;
    subs?: Ir[];
    title?: string;
    scan?: string;
    component?: string|undefined;
    icon?: string|undefined;
}

export default class SiderMenus extends React.Component<IOwnProps, {}> {
    
    public getdatas = (rr: object[]) => {
        return menus.map(r => {
            return (
                <SubMenu
                    key={r.key}
                    title={
                        <span>
                            {r.icon && <Icon type={r.icon} />}
                            <span className="nav-text">{r.title}</span>
                        </span>
                    }
                >
                    {r.subs && r.subs.map(v => this.getsubdata(v))}
                </SubMenu>
            )
        });
    }
    public getsubdata = (r: Ir): any => {
        if (r.subs) {
            return (<SubMenu
                key={r.key}
                title={
                    <span>
                        {r.icon && <Icon type={r.icon} />}
                        <span className="nav-text">{r.title}</span>
                    </span>
                }
            >
                {r.subs.map(v => this.getsubdata(v))}
            </SubMenu>)
        } else if (r.component) {
            return this.routeList(r);
        }
    }
    public routeList = (r: Ir) => {
        // 如果key非要用?可选定义，加这句就好啦
        // if (r.key == undefined) return null;
        return (<Item
            key={r.key}
        >
            <Link to={r.key} replace={true}>
                {r.icon && <Icon type={r.icon} />}
                <span className="nav-text">{r.title}</span>
            </Link>
        </Item>)
    };
    public render() {
        const res = JSON.parse(JSON.stringify({
            theme: this.props.theme,
            mode: this.props.mode
        }));
        return (
            <Menu {...res}>
                {this.getdatas(menus)}
            </Menu>
        )
    }
}
