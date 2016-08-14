import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
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
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleToggle() {
		return this.setState({
			expanded: !this.state.expanded
		});
	}

	handleClick() {
		return this.setState({
			expanded: false
		});
	}

	render() {
		return (
			<Navbar inverse fixedTop expanded={this.state.expanded} onToggle={this.handleToggle}>
				<Navbar.Brand>
					<a href="/">{this.brand}</a>
				</Navbar.Brand>
				<Navbar.Collapse>
					<Nav navbar pullRight>
						<LinkContainer to="/getting-started">
							<NavItem eventKey={11} onClick={this.handleClick}>
								Getting started
							</NavItem>
						</LinkContainer>
						<LinkContainer to="/components">
							<NavItem eventKey={12} onClick={this.handleClick}>
								Components
							</NavItem>
						</LinkContainer>
						<NavItem target="_blank" rel="noopener noreferrer" ref={this.photonkit} onClick={this.handleClick}>
							Photon
						</NavItem>
						<NavItem target="_blank" rel="noopener noreferrer" ref={this.github} onClick={this.handleClick}>
							Github
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
