import Classes from './BookList.module.css'
import BookCard from "./BookCard";

import BookContext from '../Context/BookContext';
import { useContext } from 'react';

export default function BookList(){
    const {createdBooks} = useContext(BookContext);
    const bookCards = createdBooks.map((item) => <BookCard key={item.id} book={item} />)
    return(
        <div className={Classes.bookList}>
            {bookCards}
        </div>
    );
}