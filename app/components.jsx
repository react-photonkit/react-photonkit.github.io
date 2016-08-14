import React from 'react';
import Highlight from 'react-highlight';
import {Jumbotron, Tabs, Tab} from 'react-bootstrap';
import Sample from './sample.jsx';

export default class Components extends React.Component {
	constructor() {
		super();

		this.state = {
			key: 1
		};

		this.handleSelect = this.handleSelect.bind(this);
	}

	handleSelect(key) {
		this.setState({key: key});
	}

	render() {
		return (
			<div>
				<Jumbotron>
					<div className="container">
						<h1>Components</h1>
						<p>Components of react-photonkit</p>
					</div>
				</Jumbotron>
				<div className="container">
					<Sample sample="toolbar"/>
					<Sample sample="tab"/>
					<Sample sample="nav"/>
					<Sample sample="list"/>
					<Sample sample="button"/>
					<Sample sample="btngrp"/>
					<Sample sample="form"/>
				</div>
			</div>
		);
	}
}
