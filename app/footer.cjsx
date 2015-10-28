React = require 'react'
Pkg = require '../node_modules/react-photonkit/package.json'

module.exports = React.createClass
  github: 'https://github.com/react-photonkit/react-photonkit'
  photonkit: 'http://photonkit.com'

  render: ->
    <div className="footer">
      <hr />
      <div className="text-center">
        <small>Code licensed under the MIT License and the docs are licensed under CC BY 3.0</small>
      </div>
      <div className="text-center">
        <small>{Pkg.name} v{Pkg.version}</small>
      </div>
    </div>
