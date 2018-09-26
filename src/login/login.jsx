import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginStatus, userInfo } from '../redux/actions/login'
import { login } from '../model/login'
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, message } from 'antd';

const FormItem = Form.Item;

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: 'admin',
			pws: 'mmy123'
		};
		this.userChange = this.userChange.bind(this);
		this.pwsChange = this.pwsChange.bind(this);
		this.login = this.login.bind(this);
	}
	userChange(event) {
		this.setState({ userName: event.target.value });
	}
	pwsChange(event) {
		this.setState({ pws: event.target.value });
	}
	async login() {
		let res = await login();
		if (this.state.userName === res.userName && this.state.pws === res.password) {
			let {loginStatus, userInfo} = this.props;
			userInfo({'username': this.state.userName, 'password': this.state.pws});
			loginStatus(true);
		} else {
			message.error('用户名或者密码错误');
		}
	}
	componentWillMount() {
	}
	render() {
		var userName = this.state.userName;
		var pws = this.state.pws;
		let { loginStatus } = this.props.login;
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
	componentDidMount() {
	}
	componentWillUnmount() {
	}
}

Login.propTypes = {
	login: PropTypes.shape({
		loginStatus: PropTypes.bool.isRequired,
		userInfo: PropTypes.shape({
			userName: PropTypes.string,
			password: PropTypes.string
		})
	})
}

const mapStateToPorps = state => {
	const { loginStatus, userInfo } = state.login
	return {
		login: {
			loginStatus,
			userInfo
		}
	}
};
const mapDispatchToProps = dispatch => ({
    loginStatus: bindActionCreators(loginStatus, dispatch),
    userInfo: bindActionCreators(userInfo, dispatch),
});

export default connect(mapStateToPorps, mapDispatchToProps)(Login);
