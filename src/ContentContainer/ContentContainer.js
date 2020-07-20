import React from 'react';
import '../App.css';
import TrendingContainer from './Trending/TrendingContainer';
import FeedContainer from './Feed/FeedContainer';


const contentContainer = () => {
	return <div className="contentContainer">
		     <TrendingContainer />
		     <FeedContainer />
		   </div>
}

export default contentContainer