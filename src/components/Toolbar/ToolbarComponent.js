import React from 'react'
import { BadgeComponent } from './components/badge/BadgeComponent'

export class ToolbarComponent extends React.Component {
    render() {
        this.statistic = this._statistize()

        const badges = []

        for (const item in this.statistic) {
            badges.push(
                <BadgeComponent key={item} value={this.statistic[item].value} label={this.statistic[item].label} />
            )
        }

        return <div className="container">
            { badges }
        </div>
    }

    _statistize() {
        const { jalons } = this.props

        return {
            total: {value : jalons.length, label: 'Total'},
            views: { value: jalons.filter((jalon) => jalon.viewed).length, label: 'Viewed'},
            remaining: { value: jalons.filter((jalon) => !jalon.viewed).length, label: 'Remaining'}
        }
    }
}