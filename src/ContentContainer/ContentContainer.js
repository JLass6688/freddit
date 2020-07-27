import React, { Component } from 'react';
import './ContentContainerStyles.css';
import TrendingContainer from './Trending/TrendingContainer';
import FeedContainer from './Feed/FeedContainer';


class contentContainer extends Component {
	render() {
		return <div className="contentContainer">
		    <TrendingContainer />
		    <FeedContainer />
		  </div>
	} 
}

export default contentContainer;