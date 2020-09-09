import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchFetchAction } from './actions';
import './App.scss';
import Drawing from './Drawing';
import search from "./search.svg"


function App() {
  const searchResult = useSelector((state) => state.fetch_reducer.searchResult);
  const weather = useSelector((state) => state.fetch_reducer.weather);

  let [searchTerm, setSearchTerm] = useState('');
  let [open, setOpen] = useState(false);


  const dispatch = useDispatch();



  return (
    <div className={` app ${weather}`}>
      <div className={` main`}>
      <div className="drawingWrapper"><Drawing /></div>
        <div className="contentWrapper">
          <div className='locationContainer'>
          <form
            className='searchContainer'
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(searchFetchAction(searchTerm));
            }}
            >
              <img src={search} alt="search" className="magnifier" onClick={() => setOpen(!open) }/>
              <input
              className={open? "open searchBar":"searchBar"}
              onChange={(e) => {
                e.preventDefault();
                setSearchTerm(e.target.value);
              }}
            />
            </form>
            
        <div className='location'>
                <h1>{searchResult.name}</h1>
       </div>
             
              </div>
      
      

        {searchResult ? (
          <div className="data">
            
           
           
           
              <div className='primary'>
              <div className='description'>
              
                {` ${searchResult.weather[0].main} `}
             
                </div>
                <div className='temp'>
                {Math.round(searchResult.main.temp)} C&deg;
              </div>
            </div>

           
          </div>
        ) : (
          <aside className='aside'>
          <form
            className='searchContainer'
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(searchFetchAction(searchTerm));
            }}
          >
            <input
              className='searchBar'
              onChange={(e) => {
                e.preventDefault();
                setSearchTerm(e.target.value);
              }}
            />
          </form>
        </aside>
            )}
          </div>
      </div>
    </div>
  );
}

export default App;
