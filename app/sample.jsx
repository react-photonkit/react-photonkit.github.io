import Highlight from 'react-highlight';
import {Button, Grid, Row, Col, PageHeader, Tabs, Tab} from 'react-bootstrap';

const SAMPLE = {
	toolbar: {
		category: 'Bars',
		components: 'Toolbar',
		src: '/example/toolbar/',
		code:
`<Window>
  <Toolbar title="header"/>
    <Content/>
  <Toolbar psType="footer" title="footer"/>
</Window>`
	},
	actionbar: {
		category: 'Bars with actions',
		components: 'Toolbar, Actionbar',
		src: '/example/actionbar/',
		code:
`<Window>
  <Toolbar title="header">
    <Actionbar>
      <ButtonGroup>
        <Button glyph="left-open-big" />
        <Button glyph="right-open-big" />
      </ButtonGroup>
      <Button glyph="home" text="home" />
    </Actionbar>
  </Toolbar>
  <Content />
  <Toolbar ptType="footer">
    <Actionbar>
      <Button text="cancel" />
      <Button text="save" ptStyle="primary" pullRight />
    </Actionbar>
  </Toolbar>
</Window>`
	},
	tab: {
		category: 'Tabs',
		components: 'TabGroup, TabItem',
		src: '/example/tab/',
		code:
`<Window>
    <Toolbar title="header" />
    <Content>
      <Pane>
        <TabGroup activeKey={1} onSelect={this.onSelect} draggable>
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
    <Toolbar psType="footer" title="footer" />
</Window>`
	},
	nav: {
		category: 'Navs',
		components: 'NavGroup, NavGroupItem',
		src: '/example/nav/',
		code:
`<Window>
  <Toolbar title="header" />
  <Content>
    <Pane ptSize="sm" sidebar>
      <NavGroup activeKey={1} onSelect={this.onSelect} draggable>
        <NavTitle>icon & text</NavTitle>
        <NavGroupItem eventKey={1}
                      glyph="home" text="home" />
        <NavGroupItem eventKey={2}
                      glyph="download" text="download" />

        <NavTitle>text</NavTitle>
        <NavGroupItem eventKey={3} text="home" />
        <NavGroupItem eventKey={4} text="download" />
      </NavGroup>
    </Pane>
    <Pane />
  </Content>
  <Toolbar psType="footer" title="footer" />
</Window>`
	},
	list: {
		category: 'Lists',
		components: 'ListGroup, ListItem',
		src: '/example/list/',
		code:
`<Window>
  <Toolbar title="header" />
  <Content>
    <Pane>
      <ListGroup>
        <ListItem
          image="https://avatars3.githubusercontent.com/u/1744446?v=3&s=400"
          title="list item"
          subtitle="subtitle"
          active />
        <ListItem
          image="https://avatars3.githubusercontent.com/u/1744446?v=3&s=400"
          title="list item"
          subtitle="subtitle" />
          .
      </ListGroup>
    </Pane>
  </Content>
  <Toolbar psType="footer" title="footer" />
</Window>`
	},
	button: {
		category: 'Buttons',
		components: 'Button',
		src: '/example/button/',
		code:
`<div className="padded-more">
  <h5>default buttons</h5>
  <div>
    <Button ptStyle="default" text="default" />
    <Button ptStyle="primary" text="primary" />
    <Button ptStyle="positive" text="positive" />
    <Button ptStyle="negative" text="negative" />
    <Button ptStyle="warning" text="warning" />
  </div>

  <h5>mini buttons</h5>
  <div>
    <Button ptSize="mini" ptStyle="default" text="default" />
    <Button ptSize="mini" ptStyle="primary" text="primary" />
    <Button ptSize="mini" ptStyle="positive" text="positive" />
    <Button ptSize="mini" ptStyle="negative" text="negative" />
    <Button ptSize="mini" ptStyle="warning" text="warning" />
  </div>

  <h5>large buttons</h5>
  <div>
    <Button ptSize="large" ptStyle="default" text="default" />
    <Button ptSize="large" ptStyle="primary" text="primary" />
    <Button ptSize="large" ptStyle="positive" text="positive" />
    <Button ptSize="large" ptStyle="negative" text="negative" />
    <Button ptSize="large" ptStyle="warning" text="warning" />
  </div>
</div>`
	},
	btngrp: {
		category: 'Buttons Groups',
		components: 'ButtonGroup, Button',
		src: '/example/btngrp/',
		code:
`<ButtonGroup>
  <Button glyph="home" />
  <Button glyph="arrows-ccw" />
  <Button glyph="share" />
  <Button glyph="help-circled" />
</ButtonGroup>`
	},
	form: {
		category: 'Forms',
		components: 'Input, CheckBox, Radio, RadioGroup, TextArea, Options',
		src: '/example/form/',
		code:
`<form>
  <Input ref="email" type="email"
    placeholder="Email" label="Email Address" />
  <Input ref="password" type="password"
    placeholder="Password" label="password" />

  <TextArea ref="description" rows=3 label="Description" />
  <Options ref="options" items={["Option 1", "Option 2"]} />

  <CheckBox ref="cb1" label="This is a checkbox" />
  <CheckBox ref="cb2" label="This is a checkbox too" />

  <RadioGroup ref="radios" name="radios">
    <Radio checked label="Keep your options open" />
    <Radio label="More options" />
  </RadioGroup>

  <div className="form-actions">
    <Button form type="submit"
      ptStyle="default" text="Cancel" />
    <Button form type="submit"
      ptStyle="primary" text="OK" onClick={this.submit} />
  </div>
</form>`
	},
	table: {
		category: 'Tables',
		components: 'Table',
		src: '/example/table/',
		code:
`<Table>
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
</Table>`
	},
	icon: {
		category: 'Icons',
		components: 'Icon',
		src: '/example/icon/',
		code:
`<Icon glyph="note" title="note22" />
<Icon glyph="note-beamed" title="note-beamed" />
<Icon glyph="music" title="music" />
<Icon glyph="search" title="search" />
<Icon glyph="flashlight" title="flashlight" />
<Icon glyph="mail" title="mail" />
<Icon glyph="heart" title="heart" />
<Icon glyph="heart-empty" title="heart-empty" />
<Icon glyph="star" title="star" />
<Icon glyph="star-empty" title="star-empty" />`
	}
}

export default class SampleCode extends React.Component {
	constructor(prop) {
		super();

		this.sample = SAMPLE[prop.sample];
	}

	render() {
		return (
			<Grid>
				<Row>
					<PageHeader>{this.sample.catagory} <small>{this.sample.components}</small></PageHeader>
				</Row>
				<Row>
					<Col xs={12} md={6}>
						<Highlight className="jsx">{this.sample.code}</Highlight>
					</Col>
					<Col xs={12} md={6}>
						<iframe className="iframe" src={this.sample.src} frameBorder="0" />
					</Col>
				</Row>
			</Grid>
		);
	}
}

SampleCode.propTypes = {
	sample: React.PropTypes.string
}
