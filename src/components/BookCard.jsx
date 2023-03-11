import Classes from './BookCard.module.css';
import EditIcon from '@ricons/material/ModeEditOutlineRound'
import DeleteIcon from '@ricons/antd/CloseCircleFilled'

import { Icon } from '@ricons/utils'

import BookEdit from './BookEdit';
import { useContext, useState } from 'react';

import BookContext from '../Context/BookContext';


export default function BookCard({book}){

    const [editPhase,setEditPhase] = useState(false);
    const {deleteBook,editBook} = useContext(BookContext);

    function handleDeleteName(){
        deleteBook(book.id);
    }

    let CardContent;
    if(editPhase === false){
        CardContent = (
            <>
                <div className={Classes.iconBox}>
                    <Icon size="32">
                        <EditIcon onClick={() => setEditPhase(true)}/>
                    </Icon>
                    <Icon size="32">
                        <DeleteIcon onClick={handleDeleteName}/>
                    </Icon>
                </div>
    
                <img className={Classes.cardImage} src={`https://picsum.photos/seed/${book.id}/300/300`} alt="book cover" />
                <h2 className={Classes.bookName}>{book.name}</h2>
            </>
        )
    }
    else{
        CardContent = <BookEdit book={book} editHandler={(newName,id) => {
            setEditPhase(false);
            editBook(newName,id)
        }}/>
    }

    return(
        <div className={Classes.card}>
            {CardContent}       
        </div>
    )
}