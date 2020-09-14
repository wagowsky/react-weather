import React from 'react';
import { useSelector} from 'react-redux';
import './App.scss';
import Drawing from './components/Drawing';
import Search from './components/Search';

function App() {
  const searchResult = useSelector((state) => state.fetch_reducer.searchResult);
  const weather = useSelector((state) => state.fetch_reducer.weather);


  return (
    <div className={` app ${weather}`}>
      <div className={` main`}>
        <div className='drawingWrapper' >
        {searchResult ? ( <Drawing />):null}
        </div>
        <div className='contentWrapper'>
          {searchResult ? (
            <div className='data'>
              <div className='left'>
            
              </div>

              <div className='right'>
                <div className='temp'>
                  {Math.round(searchResult.main.temp)} C&deg;
                </div>

                <div className='location'>{searchResult.name}</div>
              </div>
            </div>
          ) : (
            <Search />
          )}
        </div>
        {searchResult ? (<Search  />):null} 
      </div>
    </div>
  );
}

export default App;
