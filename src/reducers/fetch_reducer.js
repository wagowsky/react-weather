


const fetch_reducer=(state={searchResult:"",weather:""},action)=>{


switch(action.type){

    case"SEARCH_FETCH":

   
    return {...state,searchResult:action.payload.data ,weather:action.payload.data.weather[0].main};
    case"AUTO_FETCH":

   
    return {...state,searchResult:action.payload.data ,weather:action.payload.data.weather[0].main};






    default:return state




    



}








}

export default fetch_reducer