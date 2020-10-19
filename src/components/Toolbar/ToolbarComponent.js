import React from 'react'
import { BadgeComponent } from './components/badge/BadgeComponent'

export class ToolbarComponent extends React.Component {
    render() {
        console.log(`Component state was updated`)

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
    componentDidUpdate() {
        console.log(`Now, we can do what we need after componenent was updated`)
        const { jalons } = this.props
        localStorage.setItem('jalons', JSON.stringify(jalons))
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