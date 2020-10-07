import React from 'react'

export class ViewedIconComponent extends React.Component {

    render() {
        const iconClass =  this.props.viewed ? 'icon-checkmark' : 'icon-cross'
        return (
            <span className={iconClass}></span>
        )
    }
}