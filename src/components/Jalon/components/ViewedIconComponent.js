import React from 'react'

export class ViewedIconComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { viewed } = this.props.viewed
        const iconClass =  viewed ? 'icon-checkmark' : 'icon-cross'
        
        return (
            <span className={iconClass}></span>
        )
    }
}