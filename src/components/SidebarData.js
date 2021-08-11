import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';

export const linkData = [
	{
		title: 'Home',
		to: '/',
		icon: <AiIcons.AiFillHome />,
		classN: 'nav-text',
	},
	{
		title: 'Explore',
		to: '/explore',
		icon: <MdIcons.MdExplore />,
		classN: 'nav-text',
	},
	{
		title: 'History',
		to: '/history',
		icon: <FaIcons.FaHistory />,
		classN: 'nav-text',
	},
	{
		title: 'Settings',
		to: '/setting',
		icon: <AiIcons.AiFillSetting />,
		classN: 'nav-text',
	},

	{
		title: 'About',
		to: '/about',
		icon: <FaIcons.FaInfoCircle />,
		classN: 'nav-text',
	},
];
