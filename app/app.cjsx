ReactDom = require 'react-dom'
{ Router, Route, IndexRoute } = require 'react-router'
createMemoryHistory = require('history/lib/createMemoryHistory')

Master = require './master.cjsx'
Home = require './home.cjsx'
GettingStarted = require './getting-started.cjsx'
Components = require './components.cjsx'

require '../index.scss'

window.ReactDom = ReactDom

ReactDom.render(
  <Router history={createMemoryHistory()}>
    <Route path="/" component={Master}>
      <IndexRoute component={Home} />
      <Route path="getting-started" component={GettingStarted} />
      <Route path="components" component={Components} />
    </Route>
  </Router>
  , document.querySelector '#main')
