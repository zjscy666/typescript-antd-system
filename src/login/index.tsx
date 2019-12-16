import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch  } from 'redux';
import { loginStatus, userInfo } from '../redux/actions/login'
import { login } from '../model/login'
import { Redirect } from 'react-router-dom';
import { Form, Icon, Input, Button, message } from 'antd';
// import { IBaseReActions } from "../redux/reducer/login/base";
import { IBaseComAction, IOwnstate } from "../redux/actions/base";

const FormItem = Form.Item;

interface IOwnProps {
	userName : string;
	pws: string;
}

class Login extends React.Component<ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & IOwnProps, IOwnstate>{
	constructor(props: ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & IOwnProps) {
		super(props);
		this.state = {
			userName: 'admin',
			pws: 'mmy123',
		};
		this.userChange = this.userChange.bind(this);
		this.pwsChange = this.pwsChange.bind(this);
		this.login = this.login.bind(this);
	}
	public userChange: React.ReactEventHandler<HTMLInputElement> = (event) => {
		this.setState({ userName: (event.target as HTMLInputElement).value });
	}
	public pwsChange: React.ReactEventHandler<HTMLInputElement> = (event) => {
		this.setState({ pws: (event.target as HTMLInputElement).value });
	}
	public async login() {
		const res = await login();
		if (this.state.userName === res.userName && this.state.pws === res.password) {
			const { loginStatus, userInfo } = this.props;
			userInfo({ 'username': this.state.userName, 'password': this.state.pws });
			loginStatus({'loginStatus': true});
		} else {
			message.error('用户名或者密码错误');
		}
	}
	public render() {
		const userName = this.state.userName;
		const pws = this.state.pws;
		const { loginStatus } = this.props.login;
		if (loginStatus) {
			return <Redirect to={'/User/Tom'} />;
		}
		return (
			<div style={{ width: '280px', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}>
				<Form className="login-form">
					<FormItem>
						<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" value={userName} onChange={this.userChange} />
					</FormItem>
					<FormItem>
						<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" value={pws} onChange={this.pwsChange} />
					</FormItem>
					<FormItem>
						<Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }} onClick={this.login}>
							Login
	    		    </Button>
					</FormItem>
				</Form>
			</div>
		);
	}
}

const mapStateToProps = (state: IBaseComAction) => {
	const { loginStatus, userInfo } = state.login
	return {
		login: {
			loginStatus,
			userInfo
		}
	}
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
	loginStatus: bindActionCreators(loginStatus, dispatch),
	userInfo: bindActionCreators(userInfo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
