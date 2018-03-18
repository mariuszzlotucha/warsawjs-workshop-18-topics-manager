import React from 'react';

export const Input = () => {
	return (
				<section className="section">
			<div className="container">
				<div className="field is-grouped">
		  <p className="control is-expanded">
		    <input className="input" type="text" placeholder="Find a repository" />
		  </p>
		  <p className="control">
		    <a className="button is-info">
		      Propose new topic
		    </a>
		  </p>
		</div>
			</div>
		</section>
	);
}