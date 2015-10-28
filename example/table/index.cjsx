React = require 'react'
ReactDom = require 'react-dom'
{
  Toolbar, NavGroup, NavTitle, NavGroupItem
  Window, Content, PaneGroup, Pane, Button
  Input, Radio, RadioGroup, TextArea, CheckBox,
  Actionbar, ButtonGroup, Table
} = require 'react-photonkit'


Main = React.createClass
  render: ->
    <Window>
      <Toolbar title="header" />
      <Content>
        <Pane>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Kind</th>
                <th>File Size</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>photon.css</td><td>CSS</td><td>28K</td></tr>
              <tr><td>photon.css</td><td>CSS</td><td>28K</td></tr>
              <tr><td>photon.css</td><td>CSS</td><td>28K</td></tr>
              <tr><td>photon.css</td><td>CSS</td><td>28K</td></tr>
              <tr><td>photon.css</td><td>CSS</td><td>28K</td></tr>
              <tr><td>photon.css</td><td>CSS</td><td>28K</td></tr>
              <tr><td>photon.css</td><td>CSS</td><td>28K</td></tr>
              <tr><td>photon.css</td><td>CSS</td><td>28K</td></tr>
              <tr><td>photon.css</td><td>CSS</td><td>28K</td></tr>
              <tr><td>photon.css</td><td>CSS</td><td>28K</td></tr>
              <tr><td>photon.css</td><td>CSS</td><td>28K</td></tr>
              <tr><td>photon.css</td><td>CSS</td><td>28K</td></tr>
              <tr><td>photon.css</td><td>CSS</td><td>28K</td></tr>
              <tr><td>photon.css</td><td>CSS</td><td>28K</td></tr>
              <tr><td>photon.css</td><td>CSS</td><td>28K</td></tr>
              <tr><td>photon.css</td><td>CSS</td><td>28K</td></tr>
              <tr><td>photon.css</td><td>CSS</td><td>28K</td></tr>
              <tr><td>photon.css</td><td>CSS</td><td>28K</td></tr>
              <tr><td>photon.css</td><td>CSS</td><td>28K</td></tr>
              <tr><td>photon.css</td><td>CSS</td><td>28K</td></tr>
            </tbody>
          </Table>
        </Pane>
      </Content>
      <Toolbar psType="footer" title="footer" />
    </Window>

ReactDom.render(<Main /> , document.querySelector '#main')
