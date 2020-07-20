import React from 'react';
import logoImg from '../img/fred_durst.jpg';


const logo = () => {
	return <div className="logo">
		     <div className="logoContainer">
			   <img src={logoImg}></img>
			 </div>
			 <h1>freddit</h1>
		   </div>
}

export default logo;