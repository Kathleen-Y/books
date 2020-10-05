import React, {useState} from "react"
import Form from "../components/form"
import Card from "../components/cards"
import api from "../utils/api"

function Book (){
    const [state, setState] = useState({
        books: [], 
        search: ""
    })
  const handleInputChange = event => {
        const {name, value} = event.target
        setState ({
            ...state,
            [name]: value
        })
    }
   
  const handleSubmit = event => {
        api.getGoogleBooks(state.search).then(results => {
            setState({
                ...state,
                books: results.data
            })
        })
    }

    return (
        <>
             <Form search = {state.search} handleInputChange = {handleInputChange} handleSubmit= {handleSubmit} />
             <Card books = {state.books} />
        </>
    )
}

export default Book