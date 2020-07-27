import React from 'react';
import FeedPost from './FeedPost';

const imageFeedPost = (props) => {
	return (
		<FeedPost 
			currentVoteCounter={props.currentVoteCounter}
			subreddit={props.subreddit}
			author={props.author}
			timestamp={props.timestamp}
			commentCount={props.commentCount}>
			<div className="imageFeedPostContentContainer">
				<h3>{props.titleText}</h3>
				<img src={"data:image/png;base64, " + props.image} alt="Red dot" />
			</div>
		</FeedPost>
	)
}

export default imageFeedPost;