import React, { Component } from 'react';
import VoteBar from './VoteBar';
import SocialBar from './SocialBar';
import AuthorBar from './AuthorBar';

class FeedPost extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return <div className="feedPostContainer">
				<VoteBar />
				<AuthorBar />
				<h2>Testnig Headline</h2>
				<SocialBar />
		</div>
	}
}

export default FeedPost;