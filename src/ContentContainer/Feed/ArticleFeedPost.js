import React from 'react';
import FeedPost from './FeedPost';

const articleFeedPost = (props) => {
	const shortenLinkText = (linkText) => {
		return (linkText.substring(0, 30) + "...");
	}

	return (
		<FeedPost 
			currentVoteCounter={props.currentVoteCounter}
			subreddit={props.subreddit}
			author={props.author}
			timestamp={props.timestamp}
			commentCount={props.commentCount}>
			<div className="articleFeedPostContentContainer">
				<div className="articlePostTextHolder">
					<h3>{props.titleText}</h3>
					<a href={props.link} target="_blank">{shortenLinkText(props.link)}</a>
				</div>
				<img src={props.image}/>
			</div>
		</FeedPost>
	)
}

export default articleFeedPost;