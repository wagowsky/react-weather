import React from 'react';
import { useSelector} from 'react-redux';

import rain from './rain.svg'
import snow from './snow.svg'
import sun from './sun.svg'
import cloud from './cloud.svg'

function Drawing() {
 
    // const searchResult = useSelector((state) => state.fetch_reducer.searchResult);
    const weather = useSelector((state) => state.fetch_reducer.weather);





    // const drawings = [rain, snow, sun, cloud]
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
            default: drawing=null
}

    
  return (
  
      <div className="drawings" >
         
<img src={drawing} className="drawing"  alt="drawing"/>
      </div>
      
      
      
  );
}

export default Drawing;
