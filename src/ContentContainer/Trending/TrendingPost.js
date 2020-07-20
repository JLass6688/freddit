import React from 'react';

const trendingPost = (props) => {
	return <a className="trendingPost" 
			  style={{backgroundImage: `url(${props.imgsrc})`}} 
			  href={props.link} 
			  target="_blank">
		     <p>{props.header}</p>
		   </a>
}

export default trendingPost