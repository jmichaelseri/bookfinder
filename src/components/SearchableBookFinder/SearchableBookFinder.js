import React from 'react'
import Header from './Header/Header'
import SearchBar from './SearchBar/SearchBar'
import BookList from '../BookList/BookList'

const SearchableBookFinder = (props) => {
    return (
        <div>
            <Header />
            <SearchBar />
            <BookList />
        </div>
    )
}

export default SearchableBookFinder
