import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchFetchAction, autoFetchAction } from './actions';
import './App.scss';

function App() {
  const searchResult = useSelector((state) => state.fetch_reducer.searchResult);
  const weather = useSelector((state) => state.fetch_reducer.weather);

  let [searchTerm, setSearchTerm] = useState('');
  let [lon, setLon] = useState('');
  let [lat, setLat] = useState('');
  console.log(searchTerm);
  console.log(weather);

  const dispatch = useDispatch();

  // const searchTermer = (e) => {
  //   e.preventDefault();
  //   searchTerm = e.target.value;
  // };

  // const fetchAPI = (e,searchTerm) => {
  //   e.preventDefault();
  //   console.log(searchTerm)
  //   // dispatch(searchFetchAction(searchTerm));
  // };

  // const getCoordinates =  () => {
  //   console.log(`getCoordinates runs on load`);
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       setLon(position.coords.longitude);
  //       setLat(position.coords.latitude);

  //       if (lon && lat) {
  //         dispatch(autoFetchAction(lon, lat));
  //       }
  //     });
  //   } else {
  //     alert('Please search for a city!');
  //   }
  // };

  return (
    <div className={` app ${weather}`}>
      <main className={` main ${weather}`}>
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
          <>
            <div className='primary'>
              <div className='temp'>
                {Math.round(searchResult.main.temp)}C&deg;
              </div>
            </div>

            <div className='locationContainer'>
              <div className='location'>
                <h1>{searchResult.name}</h1>
              </div>
              <div className='description'>
                {searchResult.weather[0].description}
              </div>
            </div>

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
          </>
        ) : (
          <div>Looks Like this is not your day</div>
        )}
      </main>
    </div>
  );
}

export default App;
