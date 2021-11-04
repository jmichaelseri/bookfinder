import React from 'react'
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'


const ErrorPage = ({inputRef, formSubmitHandler, setSearchTerm, searchTerm}) => {
    return (
        <div className="h-screen">
            <Header />
            <SearchBar 
            ref={inputRef}
            formSubmitHandler={formSubmitHandler}
            formChangeHandler={(e) => setSearchTerm(searchTerm)} />
            <p className=" text-center text-red-500 grid place-items-center text-4xl m-10 p-10">There was an error loading your data. Please perform another search.</p>
        </div>
    )
}

export default ErrorPage