import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const bookDetails = useLoaderData()
    const {image} = bookDetails
    console.log(bookDetails)
    return (
        <div>
            Here is the book details
            <img src={image} alt="" />
        </div>
    );
};

export default BookDetails;