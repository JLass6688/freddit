import React, { Component } from 'react';
import FilterBar from './FilterBar';
import View from './View';
import Filter from './Filter';


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
			]

		}

		this.changeFilter = this.changeFilter.bind(this);
		this.changeView = this.changeView.bind(this);
	}

	changeFilter(filterType, event) {
		let e = event || window.event;
		e.preventDefault();

		if(!(filterType === this.state.currentFilter)) {
			this.setState({
				currentFilter: filterType
			})
		}
	}

	changeView(viewType, event) {
		let e = event || window.event;
		e.preventDefault();

		this.setState({
			currentView: viewType
		})
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
			   </div>
	}
}

export default FeedContainer;