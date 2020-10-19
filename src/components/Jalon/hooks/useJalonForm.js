import React, {useState} from 'react'

const useJalonForm = () => {
    const [inputs, setInputs] = useState({})

    // Handle form submission
    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault() // Don't really submit the form, let's handle by us
        }
    }

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
      }

    
    return {
        handleSubmit,
        handleInputChange,
        inputs
    }
}

export default useJalonForm