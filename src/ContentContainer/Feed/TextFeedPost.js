import React from 'react';
import FeedPost from './FeedPost';

const textFeedPost = (props) => {
	return (
		<FeedPost 
			currentVoteCounter={props.currentVoteCounter}
			subreddit={props.subreddit}
			author={props.author}
			timestamp={props.timestamp}
			commentCount={props.commentCount}>
			<div className="textFeedPostContentContainer">
				<h3>{props.titleText}</h3>
				<p>{props.subtext}</p>
			</div>
		</FeedPost>
	)
}

export default textFeedPost;