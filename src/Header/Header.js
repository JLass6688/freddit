import React from 'react';
import logo from '../img/fred_durst.jpg';
import Searchbar from './Searchbar';
import Login from './Login';
import Logo from './Logo';


const header = () => {
	return <div className="header">
		     <Logo></Logo>
		     <Searchbar></Searchbar>
		     <Login></Login>
		   </div>

}

export default header;