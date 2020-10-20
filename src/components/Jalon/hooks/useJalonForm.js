import React, {useEffect, useState} from 'react'

const useJalonForm = (initialValues, checkState, onSubmit) => {
    const [inputs, setInputs] = useState(initialValues)



    // Handle form submission
    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault() // Don't really submit the form, let's handle by us
            onSubmit()
        }
    }

    const handleInputChange = (event) => {
        event.persist() // Synthetic event are not async, so, use persist to make it async, so you can handle in the callback
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
        
    }

    // Used to update referrer form
    useEffect(() => {
        console.log(`useEffect fired ${JSON.stringify(inputs)}`)
        checkState()
    })

    return {
        handleSubmit,
        handleInputChange,
        inputs
    }
}

export default useJalonForm