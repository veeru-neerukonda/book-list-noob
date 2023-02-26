import { useState } from "react";

export default function BookEdit({bookName,bookId,editHandler}){

    const [inputValue,setInputValue] = useState(bookName);

    function onSubmitHandler(e){
        e.preventDefault();
        editHandler(inputValue,bookId);
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}