import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from '../Book/Book';
import Loading from '../Loading/Loading';

const Books = () => {
    
    const books = useLoaderData()
    const booksArray = books.books
    const navigation = useNavigation()
    if(navigation.state === 'loading'){
        return <Loading></Loading>
    }
    // console.log(booksArray)
    return (
        <div>
            <p>Total available books: {books.total}</p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4'>
            {booksArray.map(book=><Book book={book} key={book.isbn13}></Book>)}
            </div>
            
        </div>
    );
};

export default Books;