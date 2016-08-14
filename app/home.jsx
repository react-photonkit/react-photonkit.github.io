import React from 'react';
import {Button, Jumbotron, Grid, Row, Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {MainSample} from './sample.jsx';
import Pkg from '../node_modules/react-photonkit/package.json';

export default class Home extends React.Component {
	constructor() {
		super();

		this.releases = `https://github.com/react-photonkit/react-photonkit/releases/tag/v${Pkg.version}`;
	}

	render() {
		return (
			<div>
				<Jumbotron>
					<div className="container">
						<div className="text-center">
							<img src="../assets/photonkit.png" width="192" />
							<h1>{Pkg.name}</h1>
							<p>Photon components built with React</p>
							<Button bsStyle="primary" href={this.releases}>Download</Button>
							&nbsp;
							<LinkContainer to="/components">
								<Button bsStyle="danger">
									See all Components
								</Button>
							</LinkContainer>
						</div>
					</div>
				</Jumbotron>
				<div className="container">
					<Grid>
						<Row>
							<Col xs={12} md={8} mdOffset={2}>
								<div className="iframe padded-more">
									<MainSample/>
								</div>
							</Col>
						</Row>
					</Grid>
				</div>
			</div>
		)
	}
}
