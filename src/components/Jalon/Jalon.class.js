import React from 'react'


import { RatingForm } from './components/rating-form/RatingFormComponent'
import { ViewedIconComponent } from './components/icons/ViewedIconComponent'

import './css/jalon.css'

const classList = (...classes) => {
    console.log(JSON.stringify(classes))
    return classes
        .filter((item) => !!item)
        .join(' ')
}

export class JalonComponent extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(jalon) {
        console.log(`Got an event from RatingComponent !`)
        // Up event with new state
        this.props.changeState(jalon)
    }



    render () {
        const {id, title, segment, viewed} = this.props.jalon
        const iconClass = <ViewedIconComponent viewed={viewed} />

        const cardClasses = () => {
            return [
                'card',
                'jalon',
                viewed ? 'close' : 'open',
            ].join(' ')
        }
        
        
 

        return <section id="jalons">
                <div 
                    className={cardClasses()}
                    id={id}
                >
                    <h2>{title} {iconClass}</h2>
                    
                    <blockquote>{segment}</blockquote>

                    <RatingForm jalon={ this.props.jalon } changeState={this.handleClick} />

                </div>
            </section>
    }
}