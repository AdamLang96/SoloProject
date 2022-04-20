import * as types from '../constants/actionTypes';

const initialState = {
    queriedExc: [], 
    workoutSchedule: []
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.QUERYDATA: {

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(textValue)
            }
                const  response =  await fetch('http://localhost:8080/findUsers', requestOptions)
                const  data =  await response.json()
                
          return {
            ...state,
            queriedExc: [data]
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
    }
}

export default dashboardReducer;