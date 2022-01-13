import { num_min_changed, num_max_changed } from '../actions/actionTypes'

const initialState = {
    min: 1,
    max: 10
}

export default function(state = initialState, action) {
       
    switch(action.type) {
        case num_min_changed:
            return {
                ...state,
                min: action.payload
            }
        case num_max_changed:
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}

