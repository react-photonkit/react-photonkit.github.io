React = require 'react'
{
  CollapsibleNav, Nav, Navbar, NavBrand, NavItem
} = require 'react-bootstrap'
{ Link } = require 'react-router'
{ LinkContainer } = require 'react-router-bootstrap'
Package = require '../package.json'

window.React = React

module.exports = React.createClass
  onSelectMenu: (event, eventKey) ->
    alert eventKey

  render: ->
      <Navbar inverse fixedTop={yes} toggleNavKey={1}>
        <NavBrand>
          <Link to="/">{Package.name}</Link>
        </NavBrand>
        <CollapsibleNav eventKey={1}>
          <Nav navbar>
            <LinkContainer to="/getting-started">
              <NavItem eventKey={11}>Getting started</NavItem>
            </LinkContainer>
            <LinkContainer to="/components">
              <NavItem eventKey={12}>Components</NavItem>
            </LinkContainer>
          </Nav>
        </CollapsibleNav>
      </Navbar>
