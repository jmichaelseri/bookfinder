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
        const API_ENDPOINT = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${process.env.REACT_APP_API_KEY}`
        // axios.get(`/.netlify/functions/fetchBookData?queryTerm=${searchTerm}`)
        axios.get(API_ENDPOINT)
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

    if(!isIterable(bookData)){
        return <ErrorPage />
    } else {
        for (let book of bookData){
            if(book.volumeInfo.title.length > 30){
                let title = book.volumeInfo.title
                let cutOffPart = title.slice(30)
                title = title.replace(cutOffPart, '...')
                book.volumeInfo.title = title
            }
        }
    }

    if (error || !Array.isArray(bookData) || bookData.length === 0) {
        return <ErrorPage />
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
