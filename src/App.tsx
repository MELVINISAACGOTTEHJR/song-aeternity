// import { AE_AMOUNT_FORMATS } from '@aeternity/aepp-sdk';
import React from 'react';

import './App.css';
// import logo from './assets/logo.svg';
import Connect from './components/Connect';
import Songs from './components/Songs.js';

import { ClassificationTypeNames } from 'typescript';
import Playlist from './components/Playlist';


const App = () => {
	return (
		< div className='bg-yellow-500 m-y-0'>
		<Playlist/>
		<Songs/>
		</ div>
	
	);
};

export default App;
