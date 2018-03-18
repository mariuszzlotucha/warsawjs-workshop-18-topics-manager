import React, { Component } from "react";

export class UserCard extends Component {
	render() {
		return (
			<div className="column">
				<div className="card">
					<header className="card-header">
						<p className="card-header-title">Spr. czy ciasteczka dziają</p>
					</header>
					<div className="card-content">
						<div className="box media">
							<figure className="media-left">
								<p className="image is-64x64">
									<img />
								</p>
							</figure>
							<div className="media-content">
								<div className="content">
									<p>John Smith</p>
								</div>
							</div>
							<div className="media-right">
								<button className="delete" />
							</div>
						</div>
					</div>
					<footer className="card-footer">
						<a href="#" className="card-footer-item">
							❤ 0
						</a>
					</footer>
				</div>
			</div>
		);
	}
}
