import React, { useContext } from 'react';
import classes from './Person.css'

import AuthContext from '../../context/auth-context';

const person = (props) => {

	const authContext = useContext(AuthContext);

	return (
		<div className={classes.Person}>
			{authContext.authenticated ? <p>Authenticated</p> : <p>Please Log in</p>}
			<p onClick={props.click}>I'm {props.name} and I'm {props.age} years old !</p>
			<p>{props.children}</p>
			<input onChange={props.changed} value={props.name} />
		</div>
	)
}

export default person;