import React from 'react';
import View from './View';

const viewIcon = (props) => {
	if(props.viewType === View.COMPACT) {
		return (
			<svg className={props.classes} xmlns="http://www.w3.org/2000/svg" style={{width: '18px', height: '18px'}}>
				<rect id="svg_1" height="3" width="25" y="0" x="0" fill="#0079D3"></rect>
				<rect id="svg_2" height="3" width="25" y="5" x="0" fill="#0079D3"></rect>
				<rect id="svg_3" height="3" width="25" y="10" x="0" fill="#0079D3"></rect>
				<rect id="svg_4" height="3" width="25" y="15" x="0" fill="#0079D3"></rect>
			</svg>
		)
	} else if (props.viewType === View.CLASSIC) {
		return (
			<svg className={props.classes} xmlns="http://www.w3.org/2000/svg" style={{width: '18px', height: '18px'}}>
				<rect id="svg_1" height="5" width="25" y="0" x="0" fill="#0079D3"></rect>
				<rect id="svg_2" height="5" width="25" y="6" x="0" fill="#0079D3"></rect>
				<rect id="svg_3" height="5" width="25" y="12" x="0" fill="#0079D3"></rect>
			</svg>
		)
	} else {
		return (
			<svg className={props.classes} xmlns="http://www.w3.org/2000/svg" style={{width: '18px', height: '18px'}}>
				<rect id="svg_1" height="8" width="25" y="0" x="0" fill="#0079D3"></rect>
				<rect id="svg_2" height="8" width="25" y="10" x="0" fill="#0079D3"></rect>
			</svg>
		)
	}
}

export default viewIcon;