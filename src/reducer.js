import
    {SEARCH_ROBOTS_FIELD,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_FAILED} 
    from './const'

const initStateSearch={
    searchField:''
}
 export const serchRobotreducer=(state=initStateSearch,action)=>{
     switch(action.type){
        case SEARCH_ROBOTS_FIELD:
            return{
                ...state,
                searchField:action.payload
            }
        default:
            return state
     }
     
 }
 const initStateRobot={
     robots:[],
     isPending:true,
     error:''
 }
 export const requestRobotreducer=(state=initStateRobot,action)=>{
     switch (action.type) {
         case REQUEST_ROBOTS_PENDING:
             return{
                 ...state,
                 isPending:true
             }
         case REQUEST_ROBOTS_SUCCESS:
             return{
                 ...state,
                 isPending:false,
                 robots:action.payload,
             }
         case REQUEST_ROBOTS_FAILED:
            return{
                ...state,
                isPending:false,
                error:action.payload,
            }
         default:
             return state
     }

 }