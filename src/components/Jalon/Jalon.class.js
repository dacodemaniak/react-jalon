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
        this.isOpen = true
    }

    handleClick(event) {
        this.isOpen = false

        const button = event.target
        button.setAttribute('disabled', 'disabled')
        button.textContent = 'Viewed'

    }



    render () {
        const {id, title, segment} = this.props.jalon
        const jalons = this.props.jalons

        return <section id="jalons">
                <div className={classList(
                        'card',
                        'jalon',
                        this.isOpen && 'open',
                        !this.isOpen && 'disabled'
                    )}
                id={id}>
                    <h2 className={classList(
                        !this.isOpen && 'disabled'
                    )}>{title}</h2>
                    <blockquote>{segment}</blockquote>
                    <button type="button" onClick={(event) => this.handleClick(event)}>Check</button>
                </div>
                { /* Here goes other jalons from the objects array */}
                {jalons.map((element, index) => {
                    return <div key={index} id="{element.id}">
                        <h3>{element.title}</h3>
                    </div>
                })}
            </section>
    }
}