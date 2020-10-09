import React from 'react'

import { ViewedIconComponent } from './components/icons/ViewedIconComponent'
import { RatingForm } from './components/rating-form/RatingFormComponent'

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

    handleClick(event) {
        // Up event with new state
        const { jalon } = this.props
        jalon.viewed = true
        this.props.changeState(jalon)
    }



    render () {
        const {id, title, segment, viewed} = this.props.jalon

        const cardClasses = () => {
            return [
                'card',
                'jalon',
                viewed ? 'close' : 'open',
            ].join(' ')
        }
        
        const iconClass = <ViewedIconComponent viewed={viewed} />
 

        return <section id="jalons">
                <div 
                    className={cardClasses()}
                    id={id}
                >
                    <h2>{title} {iconClass}</h2>
                    
                    <blockquote>{segment}</blockquote>

                    <RatingForm />
                    
                    <button type="button" disabled={viewed} onClick={(event) => this.handleClick(event)}>
                        {iconClass} { viewed ? 'Viewed' : 'Check'}
                    </button>
                </div>
            </section>
    }
}