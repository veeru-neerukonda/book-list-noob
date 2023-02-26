import Classes from './BookCard.module.css';
import EditIcon from '@ricons/material/ModeEditOutlineRound'
import DeleteIcon from '@ricons/antd/CloseCircleFilled'

import { Icon } from '@ricons/utils'

import BookEdit from './BookEdit';
import { useState } from 'react';


export default function BookCard({name,id,deleteHandler,editHandler}){

    const [editPhase,setEditPhase] = useState(false);

    function handleDeleteName(){
        deleteHandler(id);
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
    
                <img className={Classes.cardImage} src={`https://picsum.photos/seed/${id}/300/300`} alt="book cover" />
                <h2 className={Classes.bookName}>{name}</h2>
            </>
        )
    }
    else{
        CardContent = <BookEdit bookName={name} bookId={id} editHandler={(newName,id) => {
            setEditPhase(false);
            editHandler(newName,id);
        }}/>
    }

    return(
        <div className={Classes.card}>
            {CardContent}       
        </div>
    )
}