import React from 'react'

function Form(props) {
    return (
        <div>
            <input name= "search" 
            value = {props.search} 
            onChange = {props.handleInputChange} 
            type = "text" />
            <button onClick = {props.handleSubmit}>Search Books
            </button>
        </div>
    )
}

export default Form