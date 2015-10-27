React = require 'react'
{ Jumbotron } = require 'react-bootstrap'

module.exports = React.createClass
  render: ->
    <div>
      <Jumbotron>
        <div className="container">
          <h1>Components</h1>
        </div>
      </Jumbotron>

      <div className="container">
      </div>
    </div>
