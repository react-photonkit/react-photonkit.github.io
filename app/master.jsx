import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';

export default class Master extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<div className="body">
					{this.props.children}
				</div>
				<Footer/>
			</div>
		);
	}
}

Master.propTypes = {
	children: React.PropTypes.node
};
