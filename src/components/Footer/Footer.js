import React from 'react'

const Footer = () => {
    return (
        <footer className="py-2 md:py-3 bg-green-600 w-auto md:w-3/4 mx-auto rounded">
            <ul className="flex mx-4 justify-center">
                <li className=" mx-5 hover:text-white transition duration-250 uppercase text-2xl text-grey-300"><a className="" href="https://github.com/jmichaelseri" target="_blank" rel="noreferrer"><i className="fab fa-github-square fa-lg"></i></a></li>
                <li className=" mx-5 hover:text-white transition duration-250 uppercase text-2xl text-grey-300"><a className="" href="https://www.linkedin.com/in/jmds519" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-lg"></i></a></li>
            </ul>
        </footer>
    )
}

export default Footer
