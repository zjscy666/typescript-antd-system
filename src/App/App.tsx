import * as React from 'react';
import { Layout, Icon } from 'antd';
import Routes from '../routes';
import SiderMenus from '../siderMenus';
import "antd/dist/antd.less";
import './App.less';

// 暂时只能全局引入less

const { Header, Sider, Content } = Layout;

class App extends React.Component {
  public state = {
    collapsed: false,
  };

  public toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  public render() {
    return (
      <Layout style={{ display: 'flex' }}>
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={this.state.collapsed}
          width={256}
          style={{ height: '100vh', overflow: 'hidden', overflowY: 'auto', backgroundColor: '#263030' }}
        >
          <div className="logo" />
          <SiderMenus theme='dark' mode='inline' />
        </Sider>
        <Layout style={{ flex: 1, paddingTop: '24' }}>
          <Header style={{ background: '#fff', padding: 0, height: '64px', display: 'fixed', left: 0, right: 0}}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
              style={{padding: '23px 24px'}}
            />
          </Header>
          <Content style={{ margin: '0', padding: '24px', background: '#fff', height: 'calc(100vh - 64px)', overflow: 'hidden', overflowY: 'auto' }}>
              <Routes />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

// const mapStateToPorps = state => {
//   const { loading } = state.login
//   return {
//     loading
//   }
// };

export default App;

