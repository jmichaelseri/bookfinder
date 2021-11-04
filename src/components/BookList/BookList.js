import BookCard from '../BookCard/BookCard'
import { v4 as uuidv4 } from 'uuid';


const BookList = ({ bookData, isLoading }) => {
    return (
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center items-center gap-4 mt-10">
            {isLoading ? 
                <div className="text-4xl text-green-700">Loading... </div> : 
                bookData.map(book => (
                    <BookCard 
                    key={uuidv4()}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    publisher={book.volumeInfo.publisher}
                    imageLink={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : '' }
                    infoLink={book.volumeInfo.infoLink}/>
                
            ))}
        </div>
    )
}

export default BookList