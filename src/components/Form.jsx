import { useContext, useState } from "react";
import BookContext from '../Context/BookContext';

export default function Form(){
    
    const [inputText,setInputText] = useState('');
    const {addBook} = useContext(BookContext)

    function formSubmitHandler(e){
        e.preventDefault();
        addBook(inputText);
        setInputText("");
    }

    return(
        <form className="form-component" onSubmit={formSubmitHandler}>
            <h1>Add a new book</h1>
            <div className="box">
                <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
                <button type="submit">Create Book</button>
            </div>
        </form>
    );
}