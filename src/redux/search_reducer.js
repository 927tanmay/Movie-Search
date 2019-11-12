import initialState from '../data/movie';
import {combineReducers} from 'redux';

 function movies(state=initialState,action){
    switch(action.type){
       case 'SEARCH_MOVIE':
           return{
               ...state,
                text:action.payload,
               loading:false
         } ;
      
       case 'FETCH_MOVIES':
            return{
               ...state,
               movies:action.payload.data.Search,
               loading:false
            } ; 
       
       case 'FETCH_MOVIE':
            return{
               ...state,
               movie:action.payload.data,
                  loading:false
            } ; 
       case 'LOADING':
               return{
                  ...state,
                  loading:true
               } ;      
        

         
     default: return state;
    }
} 

const rootReducer = combineReducers({movies});

export default rootReducer;