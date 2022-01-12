import './Card.css'
import React from 'react'

function getColor(props) {
    if (props.red) return "Red"
    if (props.grenn) return "Green"
    if (props.Blue) return "Blue"
    if (props.Purple) return "Purple"
    return ""
}

export default props => {
    return (
        <div className={`Card ${getColor(props)}`}>
            <div className='Header'>
                <span className='title'>{props.title}</span>
            </div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    )
}