import React, { Component } from "react";
import _ from 'lodash'

import { UserCard } from "./userCard";

export class WorkshopCard extends Component {
	render() {
		const {author, topic, trainersId, votersId} = this.props;
		
		const trainers = _.map(this.props.trainersId, id => (
			<UserCard {...this.props.users[id]} key={id} />
		));

		
		return (
			<div className="column">
				<div className="card">
					<header className="card-header">
						<div className="media-content">
							<p className="card-header-title">{topic}</p>
						</div>
						<div className="media-right">
							<button className="delete" />
						</div>
					</header>
					<div className="card-content">
						{trainers}
					</div>
					<footer className="card-footer">
						<a href="#" className="card-footer-item">
							❤
						</a>
						<a href="#" className="card-footer-item">
							➕
						</a>
					</footer>
				</div>
			</div>
		);
	}
}
