import axios from "axios"


const API_KEY="4847a4a4c8d9d1fad5cfc54c8db6d263"
const API_URL=`https://api.openweathermap.org/data/2.5/weather?q=`


const fetch_action =(payload) =>dispatch=> {
dispatch(fetch_action)
axios.get(`${API_URL}${payload}&units=metric&appid=${API_KEY}`)
// axios.get(`${API_URL}london&units=metric&appid=${API_KEY}`)
.then( res=>

    dispatch({
        
    type:"FETCH_SUCCESS",
    payload:res
})
) 



};

export default fetch_action;
