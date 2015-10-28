React = require 'react'
ReactDom = require 'react-dom'
{
  Toolbar, NavGroup, NavTitle, NavGroupItem
  Window, Content, PaneGroup, Pane, Button
  Input, Radio, RadioGroup, TextArea, CheckBox,
  Actionbar, ButtonGroup, ListGroup, ListItem
} = require 'react-photonkit'


Main = React.createClass
  render: ->
    image = "https://avatars3.githubusercontent.com/u/1744446?v=3&s=400"
    <Window>
      <Toolbar title="header" />
      <Content>
        <Pane>
          <ListGroup>
            <ListItem
              image={image}
              title="list item"
              subtitle="subtitle"
              active />
            <ListItem
              image={image}
              title="list item"
              subtitle="subtitle" />
            <ListItem
              image={image}
              title="list item"
              subtitle="subtitle" />
            <ListItem
              image={image}
              title="list item"
              subtitle="subtitle" />
            <ListItem
              image={image}
              title="list item"
              subtitle="subtitle" />
            <ListItem
              image={image}
              title="list item"
              subtitle="subtitle" />
          </ListGroup>
        </Pane>
      </Content>
      <Toolbar psType="footer" title="footer" />
    </Window>

ReactDom.render(<Main /> , document.querySelector '#main')
