import React, { Component } from "react";


import { WorkshopCard } from "./workshopCard";

export class Cards extends Component {
	render() {
		const workshops = this.props.workshops ? Object.keys(this.props.workshops).map(workshopId => (
			<WorkshopCard {...this.props.workshops[workshopId]} key={workshopId} users={this.props.users}/>
		)) : null;

		return (
			<section className="section">
				<div className="container">
					<div className="columns" />
						{workshops}
				</div>
			</section>
		);
	}
}
