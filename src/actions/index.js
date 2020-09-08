import axios from 'axios';

const API_KEY = '4847a4a4c8d9d1fad5cfc54c8db6d263';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?`;

export const searchFetchAction = (searchTerm) => (dispatch) => {


console.log(searchTerm)


  let url = `${API_URL}q=${searchTerm}&units=metric&appid=${API_KEY}`;

  dispatch(searchFetchAction);
  axios
    .get(url)
    // axios.get(`${API_URL}london&units=metric&appid=${API_KEY}`)
    .then((res) =>
      dispatch({
        type: 'SEARCH_FETCH',
        payload: res,
      })
    );
};

export const autoFetchAction = (lon, lat) => (dispatch) => {
  console.log(lon);
  console.log(lat);
  let url = `${API_URL}lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

  dispatch(autoFetchAction);
  axios
    .get(url)
    // axios.get(`${API_URL}london&units=metric&appid=${API_KEY}`)
    .then((res) =>
      dispatch({
        type: 'AUTO_FETCH',
        payload: res,
      })
    );
};
