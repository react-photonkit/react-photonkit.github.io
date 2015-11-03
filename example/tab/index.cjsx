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
        <Pane>
          <TabGroup activeKey={1} onSelect={@onSelect} draggable>
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
    </Window>

ReactDom.render(<Main /> , document.querySelector '#main')
