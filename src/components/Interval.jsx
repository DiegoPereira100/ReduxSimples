import './Interval.css'
import React from 'react'
import { connect} from 'react-redux'

import Card from './Card'
import { ChangeMinNumber } from '../store/actions/numbers'

function Interval (props) {

    const {min, max} = props;

    return (
        <Card title="Intervalo de Números" red>
            <div className='Interval'>

                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} />
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

function mapActionCreatorsToProps(dispatch) {
    return {
        changeMin(newNumber) {
            const action = ChangeMinNumber(newNumber)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Interval)