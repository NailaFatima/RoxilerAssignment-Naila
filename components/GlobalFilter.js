import React from 'react';
import './table.css';

export const GlobalFilter = ({filter, setFilter}) => {
	 return (
	 	 <span>
	 	 	Search:{' '}
	 	 	<input className="inputSearch" type="text" value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
	 	 </span>
	 	)
}