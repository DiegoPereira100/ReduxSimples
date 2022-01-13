
export function ChangeMinNumber(newNumber) {
    return {
        type: 'num_min_changed',
        payload: newNumber
    }
}