/**
 * Jalon.js
 *  Simple component that display a Jalon
 */
import React from 'react'

const el = React.createElement

export const JalonViaCreate = () => {
    return React.createElement(
        'div',
        {
            className: 'jalon',
        }, 
        // Some children
        'Complex component via createElement',
        el('button', {type: 'button', value:'remove'}, 'Remove')
    )
}

const clickHandler = () => {
    console.log('Hey, i was clicked')
}

export const Jalon = ({jalon, disabled}) => {
    const buttonContent = 'Remove'
    const buttonType = 'button'
    
    return <div className="jalon" id={jalon.id}>
        <h2 onClick={() => clickHandler()}>{jalon.title}</h2>
        <blockquote>{jalon.segment}</blockquote>
        <button type={buttonType} value="remove" disabled={disabled}>{buttonContent}</button>
    </div>
}