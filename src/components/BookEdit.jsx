import { useState } from "react";

export default function BookEdit({book,editHandler}){

    const [inputValue,setInputValue] = useState(book.name);

    function onSubmitHandler(e){
        e.preventDefault();
        editHandler(inputValue,book.id);
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}