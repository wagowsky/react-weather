


const fetch_reducer=(state={searchResult:"",weather:"",night:false,cold:false},action)=>{


switch(action.type){

    case"FETCH_SUCCESS":

    console.log(action.payload)
    return {...state,searchResult:action.payload.data ,weather:action.payload.data.weather[0].main};
    default:return state
}


}

export default fetch_reducer