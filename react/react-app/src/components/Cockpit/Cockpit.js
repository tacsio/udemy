import React, { useContext } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

	const authContext = useContext(AuthContext);

	const assignedClasses = [];
	let btnClass = '';

	if (props.showPerson) {
		btnClass = classes.Red;
	}

	if (props.persons.length <= 2) {
		assignedClasses.push(classes.red); // classes = ['red']
	}

	if (props.persons.length <= 1) {
		assignedClasses.push(classes.bold); // classes = ['red', 'bold']
	}

	return (
		<div className={classes.Cockpit}>
			<h1>Hi, I'm a React App</h1>
			<p className={assignedClasses.join(' ')}>This is realy working</p>
			<button
				className={btnClass}
				onClick={props.clicked}>Toggle Persons
      </button>
			<button
				onClick={authContext.login}> {authContext.authenticated ? 'Logout' : 'Login'}
			</button>
		</div>
	);
};

export default cockpit;