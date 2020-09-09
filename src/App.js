import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchFetchAction } from './actions';
import './App.scss';
import Drawing from './Drawing';


function App() {
  const searchResult = useSelector((state) => state.fetch_reducer.searchResult);
  const weather = useSelector((state) => state.fetch_reducer.weather);

  let [searchTerm, setSearchTerm] = useState('');
 


  const dispatch = useDispatch();



  return (
    <div className={` app ${weather}`}>
      <div className={` main`}>
        <div className="drawingWrapper"><Drawing /></div>
        <div className="contentWrapper">
      
        <header className='App-header'>
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
        </header>

        {searchResult ? (
          <div className="data">
            
            
           
            <div className='secondary'>
              <div className='feels_like'>
                {Math.round(searchResult.main.feels_like)} feel
              </div>
              <div className='humidity'>{searchResult.main.humidity} humid</div>
              
              <div className='temp_max'>
                {`${Math.round(searchResult.main.temp_max)} max`}{' '}
              </div>
              <div className='temp_max'>{`${Math.round(
                searchResult.main.temp_min
              )} min`}</div>
            </div> 
            <div className='primary'>
              <div className='temp'>
                {Math.round(searchResult.main.temp)}C&deg;
              </div>
              <div className='locationContainer'>
              <div className='location'>
                <h1>{searchResult.name}</h1>
              </div>
              <div className='description'>
                {searchResult.weather[0].description}
              </div>
            </div>
            </div>

           
          </div>
        ) : (
          <div>Looks Like this is not your day</div>
            )}
          </div>
      </div>
    </div>
  );
}

export default App;
