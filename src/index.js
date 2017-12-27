import React from 'react'
import ReactDOM from 'react-dom'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import Signup from './components/Signup'


class SiteMap extends React.Component{
  	render() {
		return (
		  	<Router>
				<div>
				  	<Route exact path="/" component={Header}/>
				  	<Route exact path="/login" component={Login}/>
				  	<Route exact path="/signup" component={Signup}/>
				</div>
		  	</Router>
		);
  	}
}

ReactDOM.render(
  	<SiteMap />,
  	document.getElementById('root')
);