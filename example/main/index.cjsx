React = require 'react'
ReactDom = require 'react-dom'
{
  Toolbar, NavGroup, NavTitle, NavGroupItem
  Window, Content, PaneGroup, Pane, Button
  Input, Radio, RadioGroup, TextArea, CheckBox,
  Actionbar, ButtonGroup
} = require 'react-photonkit'


Main = React.createClass
  submit: ->
    email = @refs.email.getValue()
    password = @refs.password.getValue()
    alert "email: #{email}, password: #{password}"

  render: ->
    <Window>
      <Toolbar title="react-photonkit example">
        <Actionbar>
          <ButtonGroup>
            <Button glyph="left-open-big" />
            <Button glyph="right-open-big" />
          </ButtonGroup>
          <ButtonGroup>
            <Button glyph="home" />
            <Button glyph="arrows-ccw" />
            <Button glyph="share" />
            <Button glyph="help-circled" />
          </ButtonGroup>
        </Actionbar>
      </Toolbar>
      <Content>
        <PaneGroup>
          <Pane ptSize="sm" sidebar>
            <NavGroup activeKey={1} onSelect={@onSelect}>
              <NavTitle>Favorite</NavTitle>
              <NavGroupItem eventKey={0} glyph="home" text="home" />
              <NavGroupItem eventKey={1} glyph="light-up" text="photonkit" />
              <NavGroupItem eventKey={2} glyph="download" text="download" />
            </NavGroup>
          </Pane>
          <Pane>
            <div className="padded-more">
              <form>
                <Input ref="email" type="email"
                  placeholder="Type your email" label="Email Address" />
                <Input ref="password" type="password"
                  placeholder="Type your password" label="password" />
                <p>TRY TO CLICK OK BUTTON!</p>
                <div className="form-actions">
                  <Button form type="submit"
                    ptStyle="default" text="Cancel" />
                  <Button form type="submit"
                    ptStyle="primary" text="OK" onClick={@submit} />
                </div>
              </form>
            </div>
          </Pane>
        </PaneGroup>
      </Content>
      <Toolbar psType="footer" />
    </Window>

ReactDom.render(<Main /> , document.querySelector '#main')
