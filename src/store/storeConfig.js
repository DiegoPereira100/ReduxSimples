import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    numbers: function(state, action) {
       
        switch(action.type) {
            case 'um_min_changed':
                return {
                    ...state,
                    min: action.payload
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