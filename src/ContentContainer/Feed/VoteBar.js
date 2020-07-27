import React from 'react';
import {ReactComponent as Arrow} from './img/arrow.svg';

const voteBar = (props) => {
	const formatVoteCountText = (voteCount) => {
		return (voteCount >= 1000) ? ((voteCount / 1000).toFixed(1) + "k") : voteCount;
	}

	return (
	<div className="voteBarContainer">
		<Arrow transform="rotate(180)" onClick={props.upvote} className={props.hasUpvoted ? "upvoteSelected" : ""}/>
		<p>{formatVoteCountText(props.count)}</p>
		<Arrow onClick={props.downvote} className={props.hasDownvoted ? "downvoteSelected" : ""}/>
	</div>);
}

export default voteBar;