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
      <Toolbar title="header" />
      <Content>
        <Pane>
          <div className="padded-more">
            <ButtonGroup>
              <Button glyph="home" />
              <Button glyph="arrows-ccw" />
              <Button glyph="share" />
              <Button glyph="help-circled" />
            </ButtonGroup>
          </div>
        </Pane>
      </Content>
      <Toolbar psType="footer" title="footer" />
    </Window>

ReactDom.render(<Main /> , document.querySelector '#main')
