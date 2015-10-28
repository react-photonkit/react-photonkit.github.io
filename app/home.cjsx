React = require 'react'
{
  Button, Jumbotron
  Grid, Row, Col
} = require 'react-bootstrap'
{ LinkContainer } = require 'react-router-bootstrap'
Pkg = require '../node_modules/react-photonkit/package.json'

module.exports = React.createClass
  releases: "https://github.com/react-photonkit/react-photonkit/releases/tag/v#{Pkg.version}"

  render: ->
    <div>
      <Jumbotron>
        <div className="container">
          <div className="text-center">
            <img src="../assets/photonkit.png" width="192" />
            <h1>{Pkg.name}</h1>
            <p>Photon components built with React</p>
            <Button bsStyle="primary" href={@releases}>Download</Button>
            &nbsp;
            <LinkContainer to="/components">
              <Button bsStyle="danger">
                See all Components
              </Button>
            </LinkContainer>
          </div>
        </div>
      </Jumbotron>

      <div className="container">
        <Grid>
          <Row>
            <Col xs={12} md={8} mdOffset={2}>
              <iframe className="iframe"
                      src="/example/main/" frameBorder="0" />
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
