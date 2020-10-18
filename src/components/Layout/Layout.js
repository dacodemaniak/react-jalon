import React from 'react'

export class Layout extends React.Component {
    render() {
       return <div className="container">
            {/* Here goes the header */}
            <header className="header">
                <h1>Meet Up</h1>
            </header>

            <footer>
                Bottom of the layout
            </footer>
        </div>
    }
}