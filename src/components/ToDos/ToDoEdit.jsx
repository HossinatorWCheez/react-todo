import Modal from "react-bootstrap/Modal"
import ToDoForm from "./ToDoForm"

export default function ResourceEdit({showEdit, setShowEdit, toDo, getToDos }) {
    const { name } = toDo

  return (
    <Modal
        show={showEdit}
        onHide={() => setShowEdit(false)}
        size="lg"
        className="toDoModal" >
        <Modal.Header closeButton>
            <h2>Editing {name}</h2>
        </Modal.Header>
        <Modal.Body>
            <ToDoForm setShowEdit={setShowEdit} getToDos={getToDos} toDo={toDo} />
        </Modal.Body>
    </Modal>
  )
}