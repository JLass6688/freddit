import React from 'react';
import {ReactComponent as ShareIcon} from './img/share.svg';

const socialBar = (props) => {
	const formatCommentText = (commentCount) => {
		if(commentCount < 1000) {
			return commentCount + " Comments";
		} else {
			return (commentCount / 1000).toFixed(1) + "k Comments";
		}
	}

	return (
		<div className="socialBarContainer">
			<div className="commentContainer">
				<p>{formatCommentText(props.commentCount)}</p>
			</div>
			<div className="shareButtonContainer">
				<ShareIcon className="shareIcon"/>
				<button>Share</button>
			</div>
			
		</div>




	);
}

export default socialBar;