
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

    const [books, setBooks] = useState([]);


    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h1 className='text-5xl font-bold text-center text-[#131313]'>Books</h1>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 p-3'>
                {
                    books.map((book) => <Book book={book} key={book.bookId}></Book>)
                }
            </div>

        </div>
    );
};

Books.propTypes = {

};

export default Books;