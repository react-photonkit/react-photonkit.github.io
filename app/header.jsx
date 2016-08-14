import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

window.React = React;

export default class Header extends React.Component {
	constructor() {
		super();

		this.brand = 'react-photonkit';
		this.github = 'https://github.com/react-photonkit/react-photonkit';
		this.photonkit = 'http://photonkit.com';
		this.state = {
			expanded: false
		}

		this.onClick = this.onClick.bind(this);
	}

	onToggle() {
		return this.setState({
			expanded: !this.state.expanded
		});
	}

	onClick(eventKey) {
		return this.setState({
			expanded: false
		});
	}

	render() {
		return (
			<Navbar inverse fixedTop={true} expanded={this.state.expanded} onToggle={this.onToggle}>
				<Navbar.Brand>
					<a href="/">{this.brand}</a>
				</Navbar.Brand>
				<Navbar.Collapse>
					<Nav navbar pullRight>
						<LinkContainer to="/getting-started">
							<NavItem eventKey={11} onClick={this.onClick}>
								Getting started
							</NavItem>
						</LinkContainer>
						<LinkContainer to="/components">
							<NavItem eventKey={12} onClick={this.onClick}>
								Components
							</NavItem>
						</LinkContainer>
						<NavItem target="_blank" href={this.photonkit} onClick={this.onClick}>
							Photon
						</NavItem>
						<NavItem target="_blank" href={this.github} onClick={this.onClick}>
							Github
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
