import React, {Component} from 'react';
import 'bulma';

import {Title} from './Title';
import {Input} from './Input';
import {Cards} from './Cards';

export class App extends Component {
	render() {
		return (
			<div>
				<Title />
				<Input />
				<Cards />
		</div>
		)
		
	}
}