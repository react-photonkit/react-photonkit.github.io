React = require 'react'
ReactDom = require 'react-dom'
{
  Toolbar, NavGroup, NavTitle, NavGroupItem
  Window, Content, PaneGroup, Pane, Button
  Input, Radio, RadioGroup, TextArea, CheckBox,
  Actionbar, ButtonGroup, Options
} = require 'react-photonkit'


Main = React.createClass
  submit: ->
    console.log 'submit'

  render: ->
    <Window>
      <Content>
        <Pane>
          <div className="padded-more">
            <form>
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
            </form>
          </div>
        </Pane>
      </Content>
    </Window>

ReactDom.render(<Main /> , document.querySelector '#main')
