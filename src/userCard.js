import React, { Component } from "react";

export class UserCard extends Component {
	render() {
		console.log(this.props);
		const { name, email, photoUrl } = this.props;
		return (
			<div className="box media">
				<figure className="media-left">
					<p className="image is-64x64">
						<img src={photoUrl} />
					</p>
				</figure>
				<div className="media-content">
					<div className="content">
						<p>{name}</p>
					</div>
				</div>
				<div className="media-right">
					<button className="delete" />
				</div>
			</div>
		);
	}
}
