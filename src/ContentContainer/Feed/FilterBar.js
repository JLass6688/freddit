import React, { Component } from 'react';
import FilterButton from './FilterButton';
import ViewButtonContainer from './ViewButtonContainer';
import Filter from './Filter';


class FilterBar extends Component {
	constructor(props) {
		super(props);
	}

	getFilterText(filterType) {
		let text = "";

		switch(filterType) {
			case Filter.HOT:
				text="Hot"
				break;
			case Filter.NEW:
				text="New"
				break;
			case Filter.TOP:
				text="Top"
				break;
		}

		return text;
	}

	getFilterClasses(filterType) {
		let classes = "filterButton";

		if(filterType === this.props.currentFilter) classes = classes + " selected";

		return classes;
	}

	render() {
		return <div className="filterBar">
				{
					this.props.filterOptions.map((filter, index) => {
						let classes = this.getFilterClasses(filter.type);
						let text = this.getFilterText(filter.type);

						return <FilterButton
								type={filter.type}
								text={text}
								classes={classes}
								click={this.props.filterClick}
								key={filter.key}/>
					})
				}
			     <ViewButtonContainer 
			     	currentView={this.props.currentView}
			     	viewOptions={this.props.viewOptions}
			     	click={this.props.viewClick} />
			   </div>
	}
}

export default FilterBar;