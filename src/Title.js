import React, {Component} from 'react';

export class Title extends Component {
	render() {
		const {loggedUser, userName} = this.props;
		const welcome = loggedUser && `Wecome,login ${userName}`;

		return (
		  <section className="section">
			  <div className="container">
			  	<nav className="navbar">
			  		<div className="navbar-menu">
			  			<div className="navbar-start">
			  				<h1 className="title">WarsawJS Workshop: Topics Manager</h1>
			  			</div>
			  			<div className="navbar-end">
			  				<h2 className="subtitle">{welcome}</h2>
			  			</div>
			  		</div>
			  	</nav>
			  </div>
			</section>
	);
	}
}