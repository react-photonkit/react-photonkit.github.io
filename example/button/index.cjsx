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
    <Window>
      <Content>
        <Pane>
          <div className="padded-more">
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
          </div>
        </Pane>
      </Content>
    </Window>

ReactDom.render(<Main /> , document.querySelector '#main')
