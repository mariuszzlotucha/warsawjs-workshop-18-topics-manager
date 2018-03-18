import React, { Component } from "react";
import firebase from 'firebase';
import "bulma";

import { Title } from "./Title";
import { Input } from "./Input";
import { Cards } from "./Cards";

export class App extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
			workshops: []
		};
	}
	componentWillMount() {
		var database = firebase.database().ref();
		database
		.on('value', snapshot => {
  		this.setData(snapshot.val());
		});
	}

	setData(data) {
		const {users, workshops} = data;
		this.setState({
  			users,
  			workshops
  		});
	}

	componentWillUnmount() {

	}

	render() {
		const {users, workshops} = this.state;
		return (
			<div>
				<Title isAnonymous={false} name="testowy" />
				<Input />
				<Cards users={users} workshops={workshops}/>
			</div>
		);
	}
}
