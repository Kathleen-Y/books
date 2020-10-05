import React from 'react'

function Card(props) {
    return (
        <div>
            {props.books.length > 0 ? props.books.map(book => {
                return (
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-3" >
                                    <img className="card-top" src={book.volumeInfo.imageLinks.thumbnail} alt="Card cap" />
                                </div>
                                <div className="col-sm-9" >
                                    <h4 className="card-title">{book.volumeInfo.title}</h4>
                                    <h5>Written by:{book.volumeInfo.authors}</h5>
                                    <p className="card-text">{book.volumeInfo.description}</p>
                                    <a href={book.volumeInfo.infoLink} className="btn btn-primary">Book  preview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }) : "No search found"}
        </div>
    )
}

export default Card