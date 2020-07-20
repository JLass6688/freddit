import React from 'react';
import {ReactComponent as Arrow} from './img/arrow.svg';

const voteBar = () => {
	return (
	<div className="voteBarContainer">
		<Arrow transform="rotate(180)"/>
		<p>42</p>
		<Arrow/>
	</div>);
}

export default voteBar;