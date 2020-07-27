import React from 'react';

const authorBar = (props) => {
	return (
		<div className="authorBarContainer">
			<h5>r/{props.subreddit}</h5>
			<p>Posted by {props.author} {props.timestamp} ago</p>
		</div>
	);
}

export default authorBar;