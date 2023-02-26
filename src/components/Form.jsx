import { useState } from "react";

export default function Form({createNewBook}){
    const [inputText,setInputText] = useState('');

    function formSubmitHandler(e){
        e.preventDefault();
        createNewBook(inputText);
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