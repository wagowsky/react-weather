import React from 'react';
import { useSelector} from 'react-redux';

import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import sun from '../assets/sun.png'
import cloud from '../assets/cloud.png'

function Drawing() {
 
    // const searchResult = useSelector((state) => state.fetch_reducer.searchResult);
    const weather = useSelector((state) => state.fetch_reducer.weather);





  
    let drawing
  
    switch (weather) {
        case "Clouds":
            drawing = cloud;
            break;
        case "Rain":
         drawing = rain;
            break;
        case "Clear":
          drawing = sun;
            break;
        case "Snow":
          drawing = snow;
            break;
            case "Fog":
              drawing = cloud;
                break;
            default: drawing=null
}

    
  return (
  
      <div className="drawings" >
         
<img src={drawing} className="drawing"  alt="drawing"/>
      </div>
      
      
      
  );
}

export default Drawing;
