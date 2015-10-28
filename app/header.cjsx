React = require 'react'
{
  CollapsibleNav, Nav, Navbar, NavBrand, NavItem
} = require 'react-bootstrap'
{ Link } = require 'react-router'
{ LinkContainer } = require 'react-router-bootstrap'
Package = require '../package.json'

window.React = React

module.exports = React.createClass
  github: 'https://github.com/react-photonkit/react-photonkit'
  photonkit: 'http://photonkit.com'

  getInitialState: ->
    expanded: false

  onToggle: ->
    @setState expanded: !@state.expanded

  onClick: (eventKey) ->
    @setState expanded: false

  render: ->
    <Navbar inverse fixedTop={yes} toggleNavKey={1}
            navExpanded={@state.expanded} onToggle={@onToggle}>
      <NavBrand>
        <a href="/">{Package.name}</a>
      </NavBrand>
      <CollapsibleNav eventKey={1}>
        <Nav navbar right>
          <LinkContainer to="/getting-started">
            <NavItem eventKey={11} onClick={@onClick}>
              Getting started
            </NavItem>
          </LinkContainer>
          <LinkContainer to="/components">
            <NavItem eventKey={12} onClick={@onClick}>
              Components
            </NavItem>
          </LinkContainer>
          <NavItem target="_blank" href={@photonkit} onClick={@onClick}>
            Photon
          </NavItem>
          <NavItem target="_blank" href={@github} onClick={@onClick}>
            Github
          </NavItem>
        </Nav>
      </CollapsibleNav>
    </Navbar>
