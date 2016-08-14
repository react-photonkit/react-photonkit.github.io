import React from 'react';
import Pkg from '../node_modules/react-photonkit/package.json';

export default class Footer extends React.Component {
	constructor() {
		super();

		this.github = 'https://github.com/react-photonkit/react-photonkit';
		this.photonkit = 'http://photonkit.com';
	}

	render() {
		return (
			<div className="footer">
				<hr/>
				<div className="text-center">
					<small>Code licensed under the MIT License and the docs are licensed under CC BY 3.0</small>
				</div>
				<div className="text-center">
					<small>{Pkg.name} v{Pkg.version}</small>
				</div>
			</div>
		);
	}
}
