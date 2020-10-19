import React from 'react'

import useJalonForm from './hooks/useJalonForm'




const CreateJalon = () => {
    // Hook destructuration to get every components
    const { inputs, handleInputChange, handleSubmit } = useJalonForm()

    return (<form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Titre : </label>
            <input type="text" name="title" required onChange={handleInputChange} value={inputs.title} />
        </div>
        <div className="form-group">
            <select name="segment" size="1" onChange={handleInputChange} value={inputs.segment}>
                <option value="">Sélectionner...</option>
                <option value="state">State</option>
                <option value="props">Props</option>
            </select>
        </div>
        <div className="form-group">
            <button type="submit">
                Créer
            </button>
        </div>
    </form>)
}

export default CreateJalon