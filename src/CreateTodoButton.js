import React from "react";
import './CreateTodoBotton.css'

function CreateTodoButton(props){
    const onClickButton = (msg) => {
        alert(msg)
    }
    return(
        <button 
        className='CreateTodoButton'
        onClick={() => onClickButton}
        >
            +
        </button>
    )
}

export {CreateTodoButton};