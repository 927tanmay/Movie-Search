import initialState from '../data/movie';
import {combineReducers} from 'redux';

 function movies(state=initialState,action){
    console.log(action.payload);
    switch(action.type){
       case 'SEARCH_MOVIE':
           return{
               ...state,
                text:action.payload,
               loading:false
         } ;
      
       case 'FETCH_MOVIE':
            console.log(action.payload.data.Search)
            return{
               ...state,
               movies:action.payload.data.Search
            } ;    
         
     default: return state;
    }
} 

const rootReducer = combineReducers({movies});

export default rootReducer;