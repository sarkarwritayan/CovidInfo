import axios from "axios";

//Coid19 data api calls

export const fetchCovidDataRequest=()=>{
    return{
        type:"FETCH_COVID_DATA_REQUEST"
    }
}
export const fetchCovidDataSuccess=(data)=>{
    return{
        type:"FETCH_COVID_DATA_SUCCESS",
        payload:data
    }
}
export const fetchCovidDataFailure=(error)=>{
    return{
        type:"FETCH_COVID_DATA_FAILURE",
        payload:error
    }
}

export const fetchCovidData=(country)=>{
    return function(dispatch){
        dispatch(fetchCovidDataRequest());
        axios.get(`https://corona.lmao.ninja/v2/countries/${country}?yesterday=true&strict=true&query`)
        .then(response=>{
            const report=response.data
            dispatch(fetchCovidDataSuccess(report))
        })
        .catch(error=>{
            dispatch(fetchCovidDataFailure(error.message))
        })
    }
}