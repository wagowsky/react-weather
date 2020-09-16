import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';
import { searchFetchAction } from '../actions';






function Search() {
    let [searchTerm, setSearchTerm] = useState('');
 
    const dispatch = useDispatch();

    
  return (
 
    <form
 
    className='searchContainer'
    onSubmit={(e) => {
      e.preventDefault();setSearchTerm("");
      dispatch(searchFetchAction(searchTerm));
    }}
  >
   
    <input
      className='searchBar'
      value={searchTerm}
      onChange={(e) => {
        e.preventDefault();
        
        setSearchTerm(e.target.value);
      }}
    />
  </form>
      
      
      
  );
}

export default Search;
