const initialState={
    loading:false,
    data:{},
    error:""
}

const CovidDataReducer=(state=initialState,action)=>{

    switch(action.type){
        case "FETCH_COVID_DATA_REQUEST":
            return{
                loading:true,
                data:{},
                error:""
            }
        case "FETCH_COVID_DATA_SUCCESS":
            return{
                loading:false,
                data:action.payload,
                error:""
            }
        case "FETCH_COVID_DATA_FAILURE":
            return{
                loading:false,
                data:{},
                error:action.payload
            }
        default:
            return state

    }
}
export default CovidDataReducer;