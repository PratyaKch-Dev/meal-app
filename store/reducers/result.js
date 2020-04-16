import {ADD_RESULT} from '..//..//store/actions/result'
import Result from '..//..//models/result'

const initialState = {
   lists : [],

};

export default (state = initialState,action) => {

    switch(action.type){
        case ADD_RESULT :
            const newResult = new Result(
                action.listResult.number,
                action.listResult.result,
                );        
                return {
                    ...state,
                    lists : state.lists.concat(newResult)
                }
    }

    return state;
}