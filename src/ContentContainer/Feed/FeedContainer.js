import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FilterBar from './FilterBar';
import View from './View';
import Filter from './Filter';
import TextFeedPost from './TextFeedPost';
import ImageFeedPost from './ImageFeedPost';
import ArticleFeedPost from './ArticleFeedPost';
import FeedPostType from './FeedPostType';



class FeedContainer extends Component {
	constructor() {
		super();

		this.state = {
			currentFilter: Filter.HOT,
			filterOptions: [
				{ type: Filter.HOT, key: "filterHot"},
				{ type: Filter.NEW, key: "filterNew"},
				{ type: Filter.TOP, key: "filterTop"}
			],
			currentView: View.CARD,
			viewOptions: [
				{type: View.CARD, key: "cardView"},
				{type: View.CLASSIC, key: "classicView"},
				{type: View.COMPACT, key: "compactView"}
			],
			feedPosts: []

		}

		this.changeFilter = this.changeFilter.bind(this);
		this.changeView = this.changeView.bind(this);
	}

	changeFilter(filterType, event) {
		let e = event || window.event;
		e.preventDefault();

		if(!(filterType === this.state.currentFilter)) {
			this.sortFeedPosts(filterType, this.state.feedPosts);
		}
	}

	changeView(viewType, event) {
		let e = event || window.event;
		e.preventDefault();

		this.setState({
			currentView: viewType
		})
	}

	sortFeedPosts(filterType, feedPosts) {
		let feedPostsCopy = JSON.parse(JSON.stringify(feedPosts));

		if(filterType === Filter.HOT) {
			feedPostsCopy.sort((a, b) => (b.commentCount - a.commentCount));
		} else if (filterType === Filter.TOP) {
			feedPostsCopy.sort((a, b) => (b.voteCount - a.voteCount));
		} else if (filterType === Filter.NEW) {
			feedPostsCopy.sort((a, b) => (b.timestamp - a.timestamp));
		} else {
			console.log("Unrecognized filter type.")
		}

		this.setState({
			feedPosts: feedPostsCopy,
			currentFilter: filterType
		})
	}

	buildFeedPostByType(post, index) {

		switch(post.type) {
			case FeedPostType.TEXT.toString():
				return <TextFeedPost 
							currentVoteCounter={post.voteCount}
							subreddit={post.subredditName}
							author={post.author}
							timestamp={post.timestamp}
							titleText={post.titleText}
							commentCount={post.commentCount}
							subtext={post.subtext}
							key={uuidv4()}/>;
			case FeedPostType.IMAGE.toString():
				return <ImageFeedPost 
							currentVoteCounter={post.voteCount}
							subreddit={post.subredditName}
							author={post.author}
							timestamp={post.timestamp}
							titleText={post.titleText}
							commentCount={post.commentCount}
							image={post.image}
							key={uuidv4()}/>;
			case FeedPostType.ARTICLE.toString():
				return <ArticleFeedPost 
							currentVoteCounter={post.voteCount}
							subreddit={post.subredditName}
							author={post.author}
							timestamp={post.timestamp}
							titleText={post.titleText}
							commentCount={post.commentCount}
							link={post.link}
							image={post.image_link}
							key={uuidv4()}/>;
//
		}
	}

	render () {
		return <div className="feedContainer">
			     <h4>Popular posts</h4>
			     <FilterBar 
			     	currentView={this.state.currentView}
			     	viewOptions={this.state.viewOptions}
			     	viewClick={this.changeView}
			     	currentFilter={this.state.currentFilter} 
			     	filterOptions={this.state.filterOptions}
			     	filterClick={this.changeFilter}
			     />
			     {
			     	this.state.feedPosts.map((post, index) => {
			     		let createdPost = this.buildFeedPostByType(post, index);
			     		
			     		return createdPost;
			     	})
			     }
			   </div>
	}

	updateStateWithData(data) {
		let json = data.popular_articles;

		this.sortFeedPosts(Filter.HOT, json);
	}

	componentDidMount() {
		fetch('http://localhost:3000/popular')
		  .then(response => response.json())
		  .then(
		  	(result) => {
		  	  this.updateStateWithData(result);
		    },
		    (error) => {
		    	console.log(error);
		    }
		)
	}
}

export default FeedContainer;