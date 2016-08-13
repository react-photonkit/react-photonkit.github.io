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
					<Tabs activeKey={this.state.key} animation={false} onSelect={this.handleSelect} id="tab-container">
						<Tab eventKey={1} title="Bars">
							<div>
								<Sample sample="toolbar"/>
								<Sample sample="actionbar"/>
							</div>
						</Tab>
						<Tab eventKey={2} title="Tabs"><Sample sample="tab"/></Tab>
						<Tab eventKey={3} title="Navs"><Sample sample="nav"/></Tab>
						<Tab eventKey={4} title="Lists"><Sample sample="list"/></Tab>
						<Tab eventKey={5}>
							<div>
								<Sample sample="button"/>
								<Sample sample="btngrp"/>
							</div>
						</Tab>
						<Tab eventKey={6} title="Forms"><Sample sample="form"/></Tab>
						<Tab eventKey={7} title="Tables"><Sample sample="table"/></Tab>
						<Tab eventKey={8} title="Icons"><Sample sample="icon"/></Tab>
					</Tabs>
				</div>
			</div>
		);
	}
}
