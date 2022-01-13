import { num_min_changed, num_max_changed } from './actionTypes'

export function ChangeMinNumber(newNumber) {
    return {
        type: num_min_changed,
        payload: newNumber
    }
}

export function ChangeMaxNumber(newNumber) {
    return {
        type: num_max_changed,
        payload: newNumber
    }
}