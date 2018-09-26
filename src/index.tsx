import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import {
  HashRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import Login from './login/login';
import reducer from './redux/reducer';
import { Route, Switch, Redirect } from 'react-router-dom';

// redux 注入操作
const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));
// console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path="/" render={props => <Redirect to="/Login" push {...props} />} /> 
				<Route path="/Login" push component={Login}/>
				<App />	
			</Switch>		
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();