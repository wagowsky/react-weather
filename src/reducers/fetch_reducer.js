


const fetch_reducer=(state={searchResult:"",weather:"",night:false,cold:false,searchTerm:"",open:false},action)=>{


switch(action.type){

    case"SEARCH_FETCH":

    console.log(action.payload)
    return {...state,searchResult:action.payload.data ,weather:action.payload.data.weather[0].main};
    case"AUTO_FETCH":

    console.log(action.payload)
    return {...state,searchResult:action.payload.data ,weather:action.payload.data.weather[0].main};






    default:return state




    



}








}

export default fetch_reducer