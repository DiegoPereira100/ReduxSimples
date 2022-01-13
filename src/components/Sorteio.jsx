import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

function Sorteio (props) {

    const {min, max} = props

    const Random = parseInt(Math.random() * (max - min)) + min

    return (
        <Card title="Sorteio de um Número" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{Random}</strong>
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

export default connect(mapStateToProps)(Sorteio)



// const Random = parseInt(Math.random() * (max - min)) + min