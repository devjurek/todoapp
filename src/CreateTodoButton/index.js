import "./CreateTodoButton.css"
import "./Change.css"

function CreateTodoButton({setOpenModal}){
    return (
        <button className="NewTask"
        
        onClick={() => {
            setOpenModal(state => !state);
          }
        }>
            New Task
        </button>
    )
}

export {CreateTodoButton};