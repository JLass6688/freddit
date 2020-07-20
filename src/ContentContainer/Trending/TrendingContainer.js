import React, { Component} from 'react';
import TrendingPost from './TrendingPost';


class TrendingContainer extends Component {
	constructor() {
		super();
		this.state = {
			posts: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3000/trending')
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

	render() {
	  return (
	  	<div className="trendingContainer">
	    	<h4>Trending today</h4>
			<div className="trendingPostContainer">
				{
					this.state.posts.map((post, index) => {
						return <TrendingPost imgsrc={post.image_link} link={post.link} header={post.header} key={index} />
					})
				}
			</div>
	  	</div>

	  	)
	}

	updateStateWithData(data) {
		let posts = data.trending_articles;
		this.setState({
			posts: posts
		})
	}

}

export default TrendingContainer;