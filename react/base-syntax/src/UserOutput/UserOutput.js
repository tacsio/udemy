import React from 'react';
import './UserOutput.css'


const userOutput = (props) => {

	let inline = {
		color: 'coral'
	}

	return (
		<div>
			<p className="first">{props.first}</p>
			<p style={inline}>{props.second}</p>

			<cite>By {props.username}</cite>
		</div>
	);
}

export default userOutput;