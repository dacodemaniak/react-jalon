import 
    React,
    {useState}
from 'react'

import ReactStars from 'react-rating-stars-component'

import { ViewedIconComponent } from './../icons/ViewedIconComponent'

export const RatingForm = (props) => {
    const [commentField, setComment] = useState('')
    const [rateField, setRate] = useState(0)
    const [canSubmit, setSubmitState] = useState(false)
    
    
    const { jalon } = props

    const handleChange = (event) => {
        setComment(event.target.value)
        console.log(`State was changed from ${event.target.value}`)
    }

    const handleRate = (rateValue) => {
        setRate(rateValue)
        console.log(`Rate was changed to ${rateField}`)
        setSubmitState(true)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        // Update jalon rate and comment
        jalon.rate = rateField
        jalon.comment = commentField
        jalon.viewed = true

        props.changeState(jalon)
    }

    // Jalon destructuration
    const {id, title, segment, viewed, comment, rate } = props.jalon

    // Sets the Rating component
    const ratingComponent = <ReactStars 
        onChange={(rate) => handleRate(rate)}
        value={rate}
        count={5}
        activeColor="#ffd770"
        edit={!viewed}
    />

    const inputField = <input 
        type="text" 
        placeholder="Your comment..." 
        value={comment}
        onChange={(event) => handleChange(event)}
    />

    const iconClass = <ViewedIconComponent viewed={viewed} />

    return <form onSubmit={handleSubmit}>
        { viewed ? comment : inputField }

        { ratingComponent }

        <button type="submit" disabled={viewed || !canSubmit}>
            {iconClass} { viewed ? 'Viewed' : 'Check'}
        </button>
    </form>
}