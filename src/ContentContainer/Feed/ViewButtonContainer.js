import React, { Component } from 'react';
import View from './View';
import Arrow from './img/dropdown_arrow.png';
import ViewIcon from './ViewIcon';

class ViewButtonContainer extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	showMenu: false
	  }

	  this.showMenu = this.showMenu.bind(this);
	  this.closeMenu = this.closeMenu.bind(this);
	}

	showMenu(event) {
		let e = event || window.event;
    	e.preventDefault();

    	this.setState({ showMenu: true }, () => {
    	  document.addEventListener('click', this.closeMenu)
    	})
	}

	closeMenu(event) {
		this.setState({ showMenu: false }, () => {
			document.removeEventListener('click', this.closeMenu)
		})
	}

	getViewText(viewType) {
		let viewText = "";

		switch(viewType) {
			case View.CARD:
				viewText = "Card";
				break;
			case View.COMPACT:
				viewText = "Compact";
				break;

			case View.CLASSIC:
				viewText = "Classic";
				break;
		}

		return viewText;
	}

	getClasses(viewType) {
		let classes = "viewMenuButton";

		if(viewType === this.props.currentView) classes += " selected";

		return classes;
	}

	render() {
		return (

		  <div className="sortButtonContainer" onClick={this.showMenu}>
		  	<ViewIcon classes="viewButtonIcon" viewType={this.props.currentView} />
		  	<img src={Arrow} className="sortMenuArrowIcon" />
		    {
		    	this.state.showMenu
		    	  ?  (
		    	  	<div className="sortMenuContainer">
		    	  	  {
		    	  	  	this.props.viewOptions.map((view, index) => {
		    	  	  		return <button 
		    	  	  				onClick={this.props.click.bind(this, view.type)} 
		    	  	  				key={view.key} 
		    	  	  				className={this.getClasses(view.type)}>{this.getViewText(view.type)}</button>
		    	  	  	})
		    	  	  }
		    	  	</div>
		    	  )
		    	  : (
		    	  	null
		    	  )

		    }
		  </div>
		)
	} 
}

export default ViewButtonContainer;