import React from 'react';

const filterButton = (props) => {
	return <button className={props.classes} onClick={props.click.bind(this, props.type)}>{props.text}</button>
}

export default filterButton;