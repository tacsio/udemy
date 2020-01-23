import React from 'react';
import classes from './Person.css'

import AuthContext from '../../context/auth-context';

const person = (props) => {
	return (
		<div className={classes.Person}>
			<AuthContext.Consumer>
				{ (context) => context.authenticated ? <p>Authenticated</p> : <p>Please Log in</p>}
			</AuthContext.Consumer>
			<p onClick={props.click}>I'm {props.name} and I'm {props.age} years old !</p>
			<p>{props.children}</p>
			<input onChange={props.changed} value={props.name} />
		</div>
	)
}

export default person;