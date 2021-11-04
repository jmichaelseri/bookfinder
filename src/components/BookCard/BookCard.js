import React from 'react'
import Button from '../Button/Button'
import img from '../../assets/images/No-Image-Placeholder.svg'


const BookCard = props => {
    return (
        <div className="bg-white border border-gray-400 flex items-center h-52 my-5">
            <img className="md: flex-shrink-0 w-40 h-60 mx-2 border border-black bg-white rounded" src={props.imageLink || img} alt="" />
            <div className="mx-3">
                <h2 className="text-sm text-gray-800 font-bold mt-2 w-36 ">{props.title}</h2>
                <p className="text-xs text-gray-600 font-bold w-36"><span className="text-sm">Author:</span> {props.author}</p>
                <p className="text-xs text-gray-600 font-bold w-36"><span className="text-sm">Publisher:</span> {props.publisher}</p>
                <Button>
                    <a href={props.infoLink} target="_blank" rel="noreferrer">More Info</a>
                </Button>
            </div>
        </div>
    )
}

export default BookCard