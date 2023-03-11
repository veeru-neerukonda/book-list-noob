import { v4 as uuidv4 } from 'uuid';
import { createContext,useState } from "react"
const BooksContext = createContext();

function Provider({children}){

    const [createdBooks,setCreatedBooks] = useState([]);
    
    function addBook(newBook){
        setCreatedBooks([...createdBooks, { id: uuidv4(), name: newBook }]
        );
    }
    function deleteBook(id){
        const filteredCollection = createdBooks.filter((book) => book.id !== id );
        setCreatedBooks(filteredCollection);
    }
    function editBook(newName,id){
        const editedCollection = createdBooks.map((book) => {
            if(book.id === id)
                book.name = newName;
            return book;
        });
        setCreatedBooks(editedCollection);
    }

    return(
        <BooksContext.Provider value={{
            createdBooks,
            addBook,
            deleteBook,
            editBook
        }}>
            {children}
        </BooksContext.Provider>
    )
}

export {Provider};
export default BooksContext;