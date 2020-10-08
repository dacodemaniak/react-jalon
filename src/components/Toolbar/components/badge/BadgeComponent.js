import React from 'react'

import './css/badge.css'

export class BadgeComponent extends React.Component {

    render() {
        return <div className="badge-container">
            <span className="badge">
                {this.props.value}
            </span>
            {this.props.label}
        </div>
    }
}