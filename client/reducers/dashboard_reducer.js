import * as types from '../constants/actionTypes';

const initialState = {
    queriedExc: [], 
    workoutSchedule: [],
    totalIDs: 0

};

const  dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.QUERYDATA: {
            const queriedResult = action.payload
            for(let i = 0; i < queriedResult.length; i++) {
               queriedResult[i].totalReps = 0
               queriedResult[i].totalSets = 0
               queriedResult[i].ID = state.totalIDs
              state.totalIDs++
            }
            
          return {
            ...state,
            queriedExc: queriedResult
          };  
       }

       case types.ADDTOWORKOUTLIST: {
        let newList = state.queriedExc
        let newWorkoutSchedule = state.workoutSchedule.slice()
        for(let i = 0; i < newList.length; i++) {
         if(newList[i].ID === action.payload) {
            newWorkoutSchedule.push(newList[i])
           break;
         }
     } 
         return {
             ...state,
             workoutSchedule: newWorkoutSchedule
           };
       }

       case types.ADDREPS: {
           let newList = state.queriedExc.slice()
           for(let i = 0; i < newList.length; i++) {
            if(newList[i].ID === action.payload) {
              newList[i].totalReps++;
              break;
            }
        } 
            return {
                ...state,
                queriedExc: newList
              };

       
               
        }
    
      case types.ADDSETS: {
        let newList = state.queriedExc.slice()
        for(let i = 0; i < newList.length; i++) {
         if(newList[i].ID === action.payload) {
           newList[i].totalSets++;
           break;
         }
     } 
         return {
             ...state,
             queriedExc: newList
           };
          

      }

       default: {
        return state;
      }
    }
}

export default dashboardReducer;