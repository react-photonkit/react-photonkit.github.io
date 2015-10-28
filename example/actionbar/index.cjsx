React = require 'react'
ReactDom = require 'react-dom'
{
  Toolbar, NavGroup, NavTitle, NavGroupItem
  Window, Content, PaneGroup, Pane, Button
  Input, Radio, RadioGroup, TextArea, CheckBox,
  Actionbar, ButtonGroup
} = require 'react-photonkit'


Main = React.createClass
  render: ->
    <Window>
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
          <Button text="save" ptStyle="primary" pullRight/>
        </Actionbar>
      </Toolbar>
    </Window>

ReactDom.render(<Main /> , document.querySelector '#main')
