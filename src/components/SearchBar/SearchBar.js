import React, { forwardRef} from 'react'
import Button from '../Button/Button'


const Search = forwardRef((props, ref) => {
    return (
        <div>
            <form className="pt-3 flex flex-col md:flex-row md:justify-center items-center" onSubmit={props.formSubmitHandler}>
              <input className="border border-gray-600 shadow md:px-12 rounded focus:outline-none focus:ring-green-600 focus:ring-2 px-2 py-1 mx-2 transition duration-300" 
                     type="text" 
                     ref={ref}/>
              <Button>Search</Button>
            </form>
        </div>
    )
})

export default Search