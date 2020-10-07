import React from 'react'

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
        const button = event.target
        button.setAttribute('disabled', 'disabled')
        button.textContent = 'Viewed'
    }



    render () {
        const {id, title, segment} = this.props.jalon
        const jalons = this.props.jalons

        return <section id="jalons">
                <div 
                    className="card jalon open"
                    id={id}
                >
                    <h2>{title}</h2>
                    <blockquote>{segment}</blockquote>
                    <button type="button" onClick={(event) => this.handleClick(event)}>Check</button>
                </div>
            </section>
    }
}