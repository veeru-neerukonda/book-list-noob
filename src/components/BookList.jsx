import Classes from './BookList.module.css'
import BookCard from "./BookCard";

export default function BookList({bookList,deleteHandler,editHandler}){
    const bookCards = bookList.map((item) => <BookCard key={item.id} name={item.name} id={item.id} deleteHandler={deleteHandler} editHandler={editHandler} />)
    return(
        <div className={Classes.bookList}>
            {bookCards}
        </div>
    );
}