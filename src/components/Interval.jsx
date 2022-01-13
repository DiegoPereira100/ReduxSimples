import './Interval.css'
import React from 'react'
import { connect} from 'react-redux'

import Card from './Card'
import { ChangeMinNumber, ChangeMaxNumber } from '../store/actions/numbers'

function Interval (props) {

    const {min, max} = props;

    return (
        <Card title="Intervalo de Números" red>
            <div className='Interval'>

                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min}
                        onChange={e => props.changeMin(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max}
                        onChange={e => props.changeMax(+e.target.value)} />
                </span>

            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

function mapDispatchToProps(dispatch) {
    return {

        changeMin(newNumber) {
            const action = ChangeMinNumber(newNumber)
            dispatch(action)
        },

        changeMax(newNumber) {
            const action = ChangeMaxNumber(newNumber)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval)