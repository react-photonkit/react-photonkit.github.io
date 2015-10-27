React = require 'react'
{ Jumbotron } = require 'react-bootstrap'

module.exports = React.createClass
  render: ->
    <div>
      <Jumbotron>
        <div className="container">
          <div className="text-center">
            <img src="../assets/photonkit.png" width="256" />
            <h1>react-photonkit</h1>
            <p>Photon components built with React</p>
          </div>
        </div>
      </Jumbotron>

      <div className="container">
        <div className="text-center">
          <iframe className="iframe" src="/example/main.html" frameBorder="0" />
        </div>
      </div>
    </div>
