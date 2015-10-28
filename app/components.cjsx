React = require 'react'
Highlight = require 'react-highlight'
{
  Button, Jumbotron, Grid, Row, Col, PageHeader, Tabs, Tab
} = require 'react-bootstrap'

module.exports = React.createClass
  render: ->
    <div>
      <Jumbotron>
        <div className="container">
          <h1>Components</h1>
          <p>Components of react-photonkit</p>
        </div>
      </Jumbotron>

      <div className="container">
        <Tabs defaultActiveKey={1} animation={false}>
          <Tab eventKey={1} title="Bars">
            <div>
              {@getBars()}
              {@getBarsWithActions()}
            </div>
          </Tab>
          <Tab eventKey={2} title="Tabs">{@getTabs()}</Tab>
          <Tab eventKey={3} title="Navs">{@getNavs()}</Tab>
          <Tab eventKey={4} title="Lists">{@getLists()}</Tab>
          <Tab eventKey={5} title="Buttons">
            <div>
              {@getButtons()}
              {@getButtonGroups()}
            </div>
          </Tab>
          <Tab eventKey={6} title="Forms">{@getForms()}</Tab>
          <Tab eventKey={7} title="Tables">{@getTables()}</Tab>
          <Tab eventKey={8} title="Icons">{@getIcons()}</Tab>
        </Tabs>
      </div>
    </div>

  getBars: ->
    <Grid>
      <Row>
        <PageHeader>Bars <small>Toolbar</small></PageHeader>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Highlight className="jsx">
            {"""<Window>
                  <Toolbar title="header" />
                  <Content />
                  <Toolbar psType="footer" title="footer" />
                </Window>"""}
          </Highlight>
        </Col>
        <Col xs={12} md={6}>
          <iframe className="iframe" src="/example/toolbar" frameBorder="0" />
        </Col>
      </Row>
    </Grid>

  getBarsWithActions: ->
    <Grid>
      <Row>
        <PageHeader>Bars with actions <small>Toolbar, Actionbar</small></PageHeader>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Highlight className="jsx">
            {"""<Window>
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
                </Window>"""}
          </Highlight>
        </Col>
        <Col xs={12} md={6}>
          <iframe className="iframe" src="/example/actionbar" frameBorder="0" />
        </Col>
      </Row>
    </Grid>

  getTabs: ->
    <Grid>
      <Row>
        <PageHeader>Tabs <small>TabGroup, TabItem</small></PageHeader>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Highlight className="jsx">
            {"""<Window>
                  <Toolbar title="header" />
                  <Content>
                    <Pane>
                      <TabGroup activeKey={1} onSelect={@onSelect}>
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
                </Window>"""}
          </Highlight>
        </Col>
        <Col xs={12} md={6}>
          <iframe className="iframe" src="/example/tab" frameBorder="0" />
        </Col>
      </Row>
    </Grid>

  getNavs: ->
    <Grid>
      <Row>
        <PageHeader>Navs <small>NavGroup, NavGroupItem</small></PageHeader>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Highlight className="jsx">
            {"""<Window>
                  <Toolbar title="header" />
                  <Content>
                    <Pane ptSize="sm" sidebar>
                      <NavGroup activeKey={1} onSelect={@onSelect}>
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
                </Window>"""}
          </Highlight>
        </Col>
        <Col xs={12} md={6}>
          <iframe className="iframe" src="/example/nav" frameBorder="0" />
        </Col>
      </Row>
    </Grid>

  getLists: ->
    <Grid>
      <Row>
        <PageHeader>Lists <small>ListGroup, ListItem</small></PageHeader>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Highlight className="jsx">
            {"""<Window>
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
                        ...
                      </ListGroup>
                    </Pane>
                  </Content>
                  <Toolbar psType="footer" title="footer" />
                </Window>"""}
          </Highlight>
        </Col>
        <Col xs={12} md={6}>
          <iframe className="iframe" src="/example/list" frameBorder="0" />
        </Col>
      </Row>
    </Grid>

  getButtons: ->
    <Grid>
      <Row>
        <PageHeader>Buttons <small>Button</small></PageHeader>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Highlight className="jsx">
            {"""<div className="padded-more">
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
                </div>"""}
          </Highlight>
        </Col>
        <Col xs={12} md={6}>
          <iframe className="iframe" src="/example/button" frameBorder="0" />
        </Col>
      </Row>
    </Grid>

  getButtonGroups: ->
    <Grid>
      <Row>
        <PageHeader>Buttons Groups <small>ButtonGroup, Button</small></PageHeader>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Highlight className="jsx">
            {"""<ButtonGroup>
                  <Button glyph="home" />
                  <Button glyph="arrows-ccw" />
                  <Button glyph="share" />
                  <Button glyph="help-circled" />
                </ButtonGroup>"""}
          </Highlight>
        </Col>
        <Col xs={12} md={6}>
          <iframe className="iframe" src="/example/btngrp" frameBorder="0" />
        </Col>
      </Row>
    </Grid>

  getForms: ->
    <Grid>
      <Row>
        <PageHeader>Forms <small>Input, CheckBox, Radio, RadioGroup, TextArea, Options</small></PageHeader>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Highlight className="jsx">
            {"""<form>
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
                      ptStyle="primary" text="OK" onClick={@submit} />
                  </div>
                </form>"""}
          </Highlight>
        </Col>
        <Col xs={12} md={6}>
          <iframe className="iframe" src="/example/form" frameBorder="0" />
        </Col>
      </Row>
    </Grid>

  getTables: ->
    <Grid>
      <Row>
        <PageHeader>Tables <small>Table</small></PageHeader>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Highlight className="jsx">
            {"""<Table>
                  <thead>
                    <tr>
                      <th>Name</th><th>Kind</th><th>File Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>photon.css</td><td>CSS</td><td>28K</td>
                    </tr>
                    ...
                    <tr>
                      <td>photon.css</td><td>CSS</td><td>28K</td>
                    </tr>
                  </tbody>
                </Table>"""}
          </Highlight>
        </Col>
        <Col xs={12} md={6}>
          <iframe className="iframe" src="/example/table" frameBorder="0" />
        </Col>
      </Row>
    </Grid>

  getIcons: ->
    <Grid>
      <Row>
        <PageHeader>Icons <small>Icon</small></PageHeader>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Highlight className="jsx">
            {"""
              <Icon glyph="note" title="note" />
              <Icon glyph="note-beamed" title="note-beamed" />
              <Icon glyph="music" title="music" />
              <Icon glyph="search" title="search" />
              <Icon glyph="flashlight" title="flashlight" />
              <Icon glyph="mail" title="mail" />
              <Icon glyph="heart" title="heart" />
              <Icon glyph="heart-empty" title="heart-empty" />
              <Icon glyph="star" title="star" />
              <Icon glyph="star-empty" title="star-empty" />
              ...
            """}
          </Highlight>
          <p>
            <Button href="http://photonkit.com/components/" target="_blank">
              See all Icons
            </Button>
          </p>
        </Col>
        <Col xs={12} md={6}>
          <iframe className="iframe" src="/example/icon" frameBorder="0" />
        </Col>
      </Row>
    </Grid>
