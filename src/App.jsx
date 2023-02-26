import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Form from './components/Form';
import BookList from './components/BookList';

export default function App(){
    const [createdBooks,setCreatedBooks] = useState([]);

    function addNewBook(newBook){
        setCreatedBooks([...createdBooks, { id: uuidv4(), name: newBook }]
        );
    }

    function deleteBook(id){
        const filteredCollection = createdBooks.filter((book) => book.id !== id );
        setCreatedBooks(filteredCollection);
    }

    function editBook(newName,id){
        const editedCollection = createdBooks.map((book) => {
            if(book.id === id){
                return{
                    ...book,
                    name: newName
                }
            }
            else return {
                ...book
            };
        });
        setCreatedBooks(editedCollection);
    }

    return(
        <div className="app">
            <BookList bookList={createdBooks} deleteHandler={deleteBook} editHandler={editBook}/>
            <div className="form-placeholder">
                <Form createNewBook={addNewBook}/>
            </div>
        </div>
    );
}