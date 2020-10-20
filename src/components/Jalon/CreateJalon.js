import React, {useState} from 'react'

import useJalonForm from './hooks/useJalonForm'

import './css/jalon-form.css'

const CreateJalon = () => {
    const [disabledState, setDisabledState] = useState(true)
    const [formContent, setFormContent] = useState({
        title: '',
        segment: ''
    })


    // Sets callback function called after form submission if it's complete
    const addJalon = () => {
        console.log(`
            About to send ${JSON.stringify(formContent)}
        `
        )
    }
    // Manage disable button attribute
    const checkState = () => {
        setFormContent(inputs)
        console.log(`Inputs state was updated with ${JSON.stringify(inputs)}`)
        let state = false
        for (const input in inputs) {
            if (inputs.hasOwnProperty(input)) {
                if (inputs[input].toString().trim().length === 0) {
                    state = true
                }
            }
        }
        console.log(`FormContent : ${JSON.stringify(formContent)}`)
        setDisabledState(state)
    }

    // Hook destructuration to get every components
    const { inputs, handleInputChange, handleSubmit } = useJalonForm(formContent, checkState, addJalon)


    

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <div className="form-group">
                <label>Titre : </label>
                <input type="text" name="title" required onChange={handleInputChange} value={inputs.title} />
            </div>
            <div className="form-group">
                <label>Segment : </label>
                <select name="segment" size="1" onChange={handleInputChange} value={inputs.segment}>
                    <option value="">Sélectionner...</option>
                    <option value="state">State</option>
                    <option value="props">Props</option>
                </select>
            </div>
            <div className="form-group">
                <button type="submit" disabled={disabledState}>
                    Créer
                </button>
            </div>
        </form>
    )
}

export default CreateJalon