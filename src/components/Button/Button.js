import React from 'react'

const Button = props => {
    return (
        <button type="submit" className="text-white rounded bg-green-600 text-center font-bold py-1 px-6 my-3 hover:bg-green-500 hover:text-white transition duration-250 col-span-1 col-start-2">
            {props.children}
            </button>
    )
}

export default Button
