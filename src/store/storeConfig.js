import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    numbers: function(state, action) {
       
        switch(action.type) {
            case 'num_min_changed':
                return {
                    ...state,
                    min: action.payload
                }
            case 'num_max_changed':
                return {
                    ...state,
                    max: action.payload
                }
            default:
                return {
                    min: 5,
                    max: 10
                }
        }
    },
    
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig