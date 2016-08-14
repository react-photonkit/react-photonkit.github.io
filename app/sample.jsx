import React from 'react';
import Highlight from 'react-highlight';
import {Grid, Row, Col, PageHeader} from 'react-bootstrap';
import {
	Window, Content, PaneGroup, Pane, Button, Toolbar, NavGroup, NavTitle,
	NavGroupItem, Input, Radio, RadioGroup, TextArea, CheckBox, Actionbar,
	ButtonGroup, TabGroup, TabItem, ListGroup, ListItem, Options, Table, Icon
} from 'react-photonkit';
import reactToJsx from 'react-to-jsx';
import autoBind from 'auto-bind';

const SAMPLE = {
	toolbar: {
		category: 'Bars',
		src: '/example/toolbar/',
		componentName: 'Toolbar',
		component: (
			<Window>
				<Toolbar title="header"/>
				<Content/>
				<Toolbar psType="footer" title="footer"/>
			</Window>
		)
	},
	actionbar: {
		category: 'Bars with actions',
		src: '/example/actionbar/',
		componentName: 'Toolbar, Actionbar',
		component: (
			<Window>
				<Toolbar title="header">
					<Actionbar>
						<ButtonGroup>
							<Button glyph="left-open-big"/>
							<Button glyph="right-open-big"/>
						</ButtonGroup>
						<Button glyph="home" text="home"/>
					</Actionbar>
				</Toolbar>
				<Content/>
				<Toolbar ptType="footer">
					<Actionbar>
						<Button text="cancel"/>
						<Button text="save" ptStyle="primary" pullRight/>
					</Actionbar>
				</Toolbar>
			</Window>
		)
	},
	tab: {
		category: 'Tabs',
		src: '/example/tab/',
		componentName: 'TabGroup, TabItem',
		component: (
			<Window>
				<Toolbar title="header"/>
				<Content>
					<Pane>
						<TabGroup activeKey={1} onSelect={() => {}} draggable>
							<TabItem eventKey={1} title="tab1">
								<div className="padded-more">
									<b>tab1</b> contents
								</div>
							</TabItem>
							<TabItem eventKey={2} title="tab2">
								<div className="padded-more">
									<b>tab2</b> contents
								</div>
							</TabItem>
						</TabGroup>
					</Pane>
				</Content>
				<Toolbar psType="footer" title="footer"/>
			</Window>
		)
	},
	nav: {
		category: 'Navs',
		src: '/example/nav/',
		componentName: 'NavGroup, NavGroupItem',
		component: (
			<Window>
				<Toolbar title="header"/>
				<Content>
					<Pane ptSize="sm" sidebar>
						<NavGroup activeKey={1} onSelect={() => {}} draggable>
							<NavTitle>icon & text</NavTitle>
							<NavGroupItem eventKey={1} glyph="home" text="home"/>
							<NavGroupItem eventKey={2} glyph="download" text="download"/>
							<NavTitle>text</NavTitle>
							<NavGroupItem eventKey={3} text="home"/>
							<NavGroupItem eventKey={4} text="download"/>
						</NavGroup>
					</Pane>
				</Content>
				<Toolbar psType="footer" title="footer"/>
			</Window>
		)
	},
	list: {
		category: 'Lists',
		src: '/example/list/',
		componentName: 'ListGroup, ListItem',
		component: (
			<Window>
				<Toolbar title="header"/>
				<Content>
					<Pane>
						<ListGroup>
							<ListItem image="https://avatars3.githubusercontent.com/u/1744446?v=3&s=400" title="list item" subtitle="subtitle" active/>
							<ListItem image="https://avatars3.githubusercontent.com/u/1744446?v=3&s=400" title="list item" subtitle="subtitle"/>
						</ListGroup>
					</Pane>
				</Content>
				<Toolbar psType="footer" title="footer"/>
			</Window>
		)
	},
	button: {
		category: 'Buttons',
		src: '/example/button/',
		componentName: 'Button',
		component: (
			<div className="padded-more">
				<h5>default buttons</h5>
				<div>
					<Button ptStyle="default" text="default"/>
					<Button ptStyle="primary" text="primary"/>
					<Button ptStyle="positive" text="positive"/>
					<Button ptStyle="negative" text="negative"/>
					<Button ptStyle="warning" text="warning"/>
				</div>

				<h5>mini buttons</h5>
				<div>
					<Button ptSize="mini" ptStyle="default" text="default"/>
					<Button ptSize="mini" ptStyle="primary" text="primary"/>
					<Button ptSize="mini" ptStyle="positive" text="positive"/>
					<Button ptSize="mini" ptStyle="negative" text="negative"/>
					<Button ptSize="mini" ptStyle="warning" text="warning"/>
				</div>

				<h5>large buttons</h5>
				<div>
					<Button ptSize="large" ptStyle="default" text="default"/>
					<Button ptSize="large" ptStyle="primary" text="primary"/>
					<Button ptSize="large" ptStyle="positive" text="positive"/>
					<Button ptSize="large" ptStyle="negative" text="negative"/>
					<Button ptSize="large" ptStyle="warning" text="warning"/>
				</div>
			</div>
		)
	},
	btngrp: {
		category: 'Buttons Groups',
		src: '/example/btngrp/',
		componentName: 'ButtonGroup, Button',
		component: (
			<ButtonGroup>
				<Button glyph="home"/>
				<Button glyph="arrows-ccw"/>
				<Button glyph="share"/>
				<Button glyph="help-circled"/>
			</ButtonGroup>
		)
	},
	form: {
		category: 'Forms',
		src: '/example/form/',
		componentName: 'Input, CheckBox, Radio, RadioGroup, TextArea, Options',
		component: (
			<form>
				<Input type="email" placeholder="Email" label="Email Address"/>
				<Input type="password" placeholder="Password" label="password"/>
				<TextArea rows="3" label="Description"/>
				<Options items={['Option 1', 'Option 2']}/>
				<CheckBox label="This is a checkbox"/>
				<CheckBox label="This is a checkbox too"/>
				<RadioGroup name="radios">
					<Radio checked label="Keep your options open"/>
					<Radio label="More options"/>
				</RadioGroup>
				<div className="form-actions">
					<Button form type="submit" ptStyle="default" text="Cancel"/>
					<Button form type="submit" ptStyle="primary" text="OK" onClick={() => {}}/>
				</div>
			</form>
		)
	},
	table: {
		category: 'Tables',
		src: '/example/table/',
		componentName: 'Table',
		component: (
			<Table>
				<thead>
					<tr>
						<th>Name</th><th>Kind</th><th>File Size</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>photon.css</td><td>CSS</td><td>28K</td>
					</tr>
					<tr>
						<td>photon.css</td><td>CSS</td><td>28K</td>
					</tr>
				</tbody>
			</Table>
		)
	},
	icon: {
		category: 'Icons',
		src: '/example/icon/',
		componentName: 'Icon',
		component: (
			<div>
				<Icon glyph="note" title="note22"/>
				<Icon glyph="note-beamed" title="note-beamed"/>
				<Icon glyph="music" title="music"/>
				<Icon glyph="search" title="search"/>
				<Icon glyph="flashlight" title="flashlight"/>
				<Icon glyph="mail" title="mail"/>
				<Icon glyph="heart" title="heart"/>
				<Icon glyph="heart-empty" title="heart-empty"/>
				<Icon glyph="star" title="star"/>
				<Icon glyph="star-empty" title="star-empty"/>
			</div>
		)
	}
};

export default class SampleCode extends React.Component {
	constructor(prop) {
		super(prop);

		this.sample = SAMPLE[prop.sample];
		this.sample.code = reactToJsx(this.sample.component, {indent: '  '});
	}

	render() {
		return (
			<Grid>
				<Row>
					<PageHeader>{this.sample.catagory} <small>{this.sample.componentName}</small></PageHeader>
				</Row>
				<Row>
					<Col xs={12} md={6}>
						<Highlight className="jsx">{this.sample.code}</Highlight>
					</Col>
					<Col xs={12} md={6}>
						<div className="iframe padded-more">
							{this.sample.component}
						</div>
					</Col>
				</Row>
			</Grid>
		);
	}
}

SampleCode.propTypes = {
	sample: React.PropTypes.string
};

export class MainSample extends React.Component {
	constructor(props) {
		super(props);

		autoBind(this);
	}

	bindRef(prop, e) {
		this[prop] = e;
	}

	handleSubmit() {
		const email = this.email.getValue();
		const password = this.password.getValue();
		alert(`email: ${email}, password: ${password}`);
	}

	render() {
		return (
			<Window>
				<Toolbar title="react-photonkit example">
					<Actionbar>
						<ButtonGroup>
							<Button glyph="left-open-big"/>
							<Button glyph="right-open-big"/>
						</ButtonGroup>
						<ButtonGroup>
							<Button glyph="home"/>
							<Button glyph="arrows-ccw"/>
							<Button glyph="share"/>
							<Button glyph="help-circled"/>
						</ButtonGroup>
					</Actionbar>
				</Toolbar>
				<Content>
					<PaneGroup>
						<Pane ptSize="sm" sidebar>
							<NavGroup activeKey={1}>
								<NavTitle>Favorite</NavTitle>
								<NavGroupItem eventKey={0} glyph="home" text="home"/>
								<NavGroupItem eventKey={1} glyph="light-up" text="photonkit"/>
								<NavGroupItem eventKey={2} glyph="download" text="download"/>
							</NavGroup>
						</Pane>
						<Pane>
							<div className="padded-more">
								<form>
									<Input ref={e => this.bindRef('email', e)} type="email" placeholder="Type your email" label="Email Address"/>
									<Input ref={e => this.bindRef('password', e)} type="password" placeholder="Type your password" label="password"/>
									<div className="form-actions">
										<Button form type="submit" ptStyle="default" text="Cancel"/>
										<Button form type="submit" ptStyle="primary" text="OK" onClick={this.handleSubmit}/>
									</div>
								</form>
							</div>
						</Pane>
					</PaneGroup>
				</Content>
				<Toolbar psType="footer"/>
			</Window>
		);
	}
}
