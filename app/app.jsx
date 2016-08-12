import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import createHistory from 'history/lib/createHashHistory';
import {createHashHistory} from 'history';
import Master from './master.jsx';
import Home from './home.jsx';
import GettingStarted from './getting-started.jsx';
import Components from './components.jsx';
import '../node_modules/highlight.js/styles/github.css';
import '../index.scss';

const history = useRouterHistory(createHashHistory)();

ReactDom.render(
	<Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
		<Route path="/" component={Master}>
			<IndexRoute component={Home} />
				<Route path="getting-started" component={GettingStarted} />
				<Route path="components" component={Components} />
		</Route>
	</Router>,
	document.querySelector('#main')
);
