import React, { Component } from "react";

import { UserCard } from "./userCard";
import { WorkshopCard } from "./workshopCard";

export class Cards extends Component {
	render() {
		return (
			<section className="section">
				<div className="container">
					<div className="columns">
						<UserCard />
						<WorkshopCard />
					</div>
				</div>
			</section>
		);
	}
}
