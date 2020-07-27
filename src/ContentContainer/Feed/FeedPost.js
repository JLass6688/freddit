import React, { Component } from 'react';
import VoteBar from './VoteBar';
import SocialBar from './SocialBar';
import AuthorBar from './AuthorBar';

class FeedPost extends Component {
	constructor(props){
		console.log(props.author);
		super(props);

		this.state = {
			currentVoteCounter: props.currentVoteCounter,
			hasUpvoted: false,
			hasDownvoted: false 
		}

		this.upvoteClick = this.upvoteClick.bind(this);
		this.downvoteClick = this.downvoteClick.bind(this);
	}

	upvoteClick() {
		let voteCounter = this.state.currentVoteCounter;

		if(this.state.hasDownvoted) {
			voteCounter += 2;
			this.setState({
				hasDownvoted: false
			})
		} else {
			voteCounter += 1;
		}

		this.setState({
			currentVoteCounter: voteCounter,
			hasUpvoted: true
		})
	}

	downvoteClick() {
		let voteCounter = this.state.currentVoteCounter;

		if(this.state.hasUpvoted) {
			voteCounter -= 2;
			this.setState({
				hasUpvoted: false
			})
		} else {
			voteCounter -= 1;
		}

		this.setState({
			currentVoteCounter: voteCounter,
			hasDownvoted: true
		})
	}

	getTimestampText(timestamp) {
		let currentTime = new Date().getTime();

		let seconds = ((currentTime - timestamp) / 1000);

		if(seconds < 60) {
			return Math.round(seconds) + " seconds";
		} else if (seconds < 3600) {
			return Math.round(seconds / 60) + " minutes";
		} else if (seconds < 86400) {
			return Math.round(seconds / 3600) + " hours";
		} else {
			return Math.round(seconds / 86400) + " days";
		}
	}

	render() {

		return <div className="feedPostContainer">
			<VoteBar
				count={this.state.currentVoteCounter}
				upvote={ !this.state.hasUpvoted ? this.upvoteClick : null}
				downvote={ !this.state.hasDownvoted ? this.downvoteClick : null}
				hasUpvoted={this.state.hasUpvoted}
				hasDownvoted={this.state.hasDownvoted}/>
			<div className="feedPostContentContainer">
				<AuthorBar 
					subreddit={this.props.subreddit}
					author={this.props.author}
					timestamp={this.getTimestampText(this.props.timestamp)}/>
				{this.props.children}
				<SocialBar commentCount={this.props.commentCount}/>
			</div>
		</div>
	}
}

export default FeedPost;