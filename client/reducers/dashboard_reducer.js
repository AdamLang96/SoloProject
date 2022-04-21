import * as types from '../constants/actionTypes';

const initialState = {
    queriedExc: [], 
    workoutSchedule: []
};

const  dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.QUERYDATA: {

            // const requestOptions = {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(action.payload)
            // }

            // fetch('http://localhost:8080/findUsers', requestOptions)
            // .then((res) => {
            //     console.log('fetch response',res)
            //     return res.json()
            // })
            // .then (data =>{
            //     const queriedExc = data;
            //     return{
            //         ...state,
            //         queriedExc
            //     }
            // })

            // async function fetchWorkouts() {
            //     const  response =  await fetch('http://localhost:8080/findUsers', requestOptions)
            //     const  data     =  await response.json()
            //     console.log('inside async', data)
            //     return data
            // }

            // fetchWorkouts().then((response) => {
            //     const queriedExc =  response
            //     return{
            //         ...state,
            //         queriedExc
            //     }})
                
          return {
            ...state,
            queriedExc: action.payload
          };  
       }

       case types.ADDTOWORKOUTLIST: {
           const newWorkout = action.payload
           const newSchedule = state.workoutSchedule.slice()
           newSchedule.push(newWorkout)

           return {
               ...state,
               workoutSchedule: newSchedule
           }
       }

       default: {
        return state;
      }
    }
}

export default dashboardReducer;