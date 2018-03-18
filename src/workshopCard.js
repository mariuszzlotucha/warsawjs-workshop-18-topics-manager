import React, {Component} from 'react';

export class WorkshopCard extends Component {
	render() {
		return (
			<div className="column">
  				<div className="card">
					  <header className="card-header">
					  	<div className="media-content">
					  		<p className="card-header-title">
						      Component
						    </p>
					  	</div>
						  <div className="media-right">
						  	<button className="delete"></button>
						  </div>	
						    
					  </header>
					  <div className="card-content">
					    <div className="content">
					     content
					    </div>
					  </div>
					  <footer className="card-footer">
					    <a href="#" className="card-footer-item">❤</a>
					    <a href="#" className="card-footer-item">➕</a>
					  </footer>
					</div>
  		</div>
		);
	}
}