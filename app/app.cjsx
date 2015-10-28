ReactDom = require 'react-dom'
{ Router, Route, IndexRoute } = require 'react-router'
createHistory = require 'history/lib/createHashHistory'

Master = require './master.cjsx'
Home = require './home.cjsx'
GettingStarted = require './getting-started.cjsx'
Components = require './components.cjsx'

require '../index.scss'
require '../node_modules/highlight.js/styles/github.css'

history = createHistory queryKey: false
ReactDom.render(
  <Router history={history} onUpdate={() -> window.scrollTo(0, 0)}>
    <Route path="/" component={Master}>
      <IndexRoute component={Home} />
      <Route path="getting-started" component={GettingStarted} />
      <Route path="components" component={Components} />
    </Route>
  </Router>
  , document.querySelector '#main')
