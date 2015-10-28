React = require 'react'
Header = require './header.cjsx'
Footer = require './footer.cjsx'

module.exports = React.createClass
  render: ->
    <div>
      <Header />
      <div className="body">
        {@props.children}
      </div>
      <Footer />
    </div>
