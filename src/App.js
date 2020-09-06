import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetch_action from './actions';
import './App.scss';

function App() {
  const state = useSelector((state) => state.fetch_reducer.searchResult);
  const weather = useSelector((state) => state.fetch_reducer.weather);

  console.log(weather);

  const dispatch = useDispatch();

  let searchTerm;


  const searchTermer = (e) => {
    e.preventDefault();
    searchTerm = e.target.value;
  };

  const fetchAPI = (e, searchTermer) => {
    e.preventDefault();
    dispatch(fetch_action(searchTerm));
  };

  return (
    <div className={` app ${weather}`}>
      <main className={` main ${weather}`}>
        <header className='App-header'>
          <form className='searchContainer' onSubmit={fetchAPI}>
            <input className='searchBar' onChange={searchTermer} />
          </form>
        </header>

        {state ? (
          <>
            <div className='primary'>
              <div className='temp'>{Math.round(state.main.temp)}&deg;</div>
            </div>

            <div className='locationContainer'>
              <div className='location'>
                <h1>{state.name}</h1>
              </div>
              <div className='description'>{state.weather[0].description}</div>
            </div>
            {/* <div className='secondary'>
              <div className='feels_like'>
                {Math.round(state.main.feels_like)} feel
              </div>
              <div className='humidity'>{state.main.humidity} humid</div>
              
              <div className='temp_max'>
                {`${Math.round(state.main.temp_max)} max`}{' '}
              </div>
              <div className='temp_max'>{`${Math.round(
                state.main.temp_min
              )} min`}</div>
            </div> */}
          </>
        ) : (
          console.log('no state')
        )}
      </main>
    </div>
  );
}

export default App;
