import React from 'react'

export class ViewedIconComponent extends React.Component {
    render() {
        const { viewed } = this.props
        const iconClass =  viewed ? 'icon-cross' : 'icon-checkmark'
        return (
            <span className={iconClass}></span>
        )
    }
}