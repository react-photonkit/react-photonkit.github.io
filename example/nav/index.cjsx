React = require 'react'
ReactDom = require 'react-dom'
{
  Toolbar, NavGroup, NavTitle, NavGroupItem
  Window, Content, PaneGroup, Pane, Button
  Input, Radio, RadioGroup, TextArea, CheckBox,
  Actionbar, ButtonGroup
  TabGroup, TabItem
} = require 'react-photonkit'


Main = React.createClass
  onSelect: (eventKey)->
    console.log "eventKey: #{eventKey}"

  render: ->
    <Window>
      <Toolbar title="header" />
      <Content>
        <Pane ptSize="sm" sidebar>
          <NavGroup activeKey={1} onSelect={@onSelect} draggable>
            <NavTitle>icon & text</NavTitle>
            <NavGroupItem eventKey={1} glyph="home" text="home" />
            <NavGroupItem eventKey={2} glyph="download" text="download" />

            <NavTitle>text</NavTitle>
            <NavGroupItem eventKey={3} text="home" />
            <NavGroupItem eventKey={4} text="download" />
          </NavGroup>
        </Pane>
        <Pane />
      </Content>
      <Toolbar psType="footer" title="footer" />
    </Window>

ReactDom.render(<Main /> , document.querySelector '#main')
