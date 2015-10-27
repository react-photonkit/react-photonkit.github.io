React = require 'react'
{ Jumbotron } = require 'react-bootstrap'

module.exports = React.createClass
  render: ->
    <div>
      <Jumbotron>
        <div className="container">
          <h1>Getting started</h1>
          <p>Photon components built with React</p>
        </div>
      </Jumbotron>

      <div className="container">
      </div>
    </div>
