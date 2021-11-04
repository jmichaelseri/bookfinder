import React, {useState, useEffect, useRef} from 'react'
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
import BookList from '../BookList/BookList';
import ErrorPage from '../ErrorPage/ErrorPage';
import { isIterable } from '../../Utilities/utils'
const axios = require('axios');

const SearchableBookFinder = (props) => {
    const [searchTerm, setSearchTerm] = useState('books')
    const [bookData, setBookData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()
    const inputRef = useRef()
    

    useEffect(() => {
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${process.env.REACT_APP_API_KEY}`
        axios.get(apiUrl)
            .then((response) => {
                setIsLoading(false)
                setBookData(response.data.items)
                
            })
            .catch((error) => {
                setIsLoading(false)
                setError(error)
                console.log(error.message)
               
            })
    }, [searchTerm])


    const formSubmitHandler = (event) => {
        event.preventDefault()
        setSearchTerm(inputRef.current.value)
        inputRef.current.value = ''
    }
    return (
        <div>
            <Header />
            <SearchBar 
                ref={inputRef}
                formSubmitHandler={formSubmitHandler}
                formChangeHandler={(e) => setSearchTerm(searchTerm)} />
            <BookList bookData={bookData} loading={isLoading} />
        </div>
    )
}

export default SearchableBookFinder
