import React from 'react';
import classes from './Person.css'

const person = (props) => {
	return (
		<div className={classes.Person}>
			{ props.isAuth ? <p>Authenticated</p> : <p>Please Log in</p>}
			<p onClick={props.click}>I'm {props.name} and I'm {props.age} years old !</p>
			<p>{props.children}</p>
			<input onChange={props.changed} value={props.name}/>
		</div>
	)
}

export default person;