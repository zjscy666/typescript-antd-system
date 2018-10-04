import React, { Component } from 'react';
import routesConfig from '../routes/config';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
let SubMenu = Menu.SubMenu;
let Item = Menu.Item;
let menus = routesConfig.menus
export default class SiderMenus extends Component {
    
    getdatas = rr => {
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
    getsubdata = r => {
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
    routeList = r => {
        return (<Item
            key={r.key}
        >
            <Link to={r.route || r.key} replace>
                {r.icon && <Icon type={r.icon} />}
                <span className="nav-text">{r.title}</span>
            </Link>
        </Item>)
    };
    render() {
        return (
            <Menu {...this.props}>
                {this.getdatas(menus)}
            </Menu>
        )
    }
}
