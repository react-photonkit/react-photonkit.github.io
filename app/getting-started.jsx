import React from 'react';
import Highlight from 'react-highlight';
import {Jumbotron, PageHeader} from 'react-bootstrap';

export default class GettingStart extends React.Component {
	constructor() {
		super();

		this.template =
			`<Window>
				<Toolbar title="basic template" />
				<Content>
					<div className="padded-more">
						basic template
					</div>
				</Content>
				<Toolbar psType="footer" />
			</Window>`;
	}

	getInstallSection() {
		return (
			<section>
				<PageHeader>Install</PageHeader>
				<Highlight className="sh">$ npm install react-photonkit</Highlight>
			</section>
		);
	}

	getBasicTemplateSection() {
		return (
			<section>
				<PageHeader>Basic Template</PageHeader>
				<Highlight className="jsx">{this.template}</Highlight>
				<ul>
					<li>Wrap your entire app inside <code>&lt;Window&gt;</code></li>
					<li><code>&lt;Toolbar&gt;</code> sits at the top of your app</li>
					<li>Your app&apos;s content goes inside <code>&lt;Content&gt;</code></li>
					<li><code>&lt;Toolbar psType=&quot;footer&quot;&gt;</code> sits at the bottom of your app</li>
				</ul>
			</section>
		);
	}

	render() {
		return (
			<div>
				<Jumbotron>
					<div className="container">
						<h1>Getting started</h1>
						<p>An overview of react-photonkit</p>
					</div>
				</Jumbotron>

				<div className="container">
					{this.getInstallSection()}
					{this.getBasicTemplateSection()}
				</div>
			</div>
		);
	}
}
