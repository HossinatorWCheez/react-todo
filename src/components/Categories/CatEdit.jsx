import Modal from "react-bootstrap/Modal"
import CatForm from "./CatForm"

export default function CatEdit({ showEdit, setShowEdit, category, getCategories }) {
    const { categoryName } = category

  return (
    <Modal
        show={showEdit}
        onHide={() => setShowEdit(false)}
        size="lg"
        className="catModal" >
        <Modal.Header closeButton>
            <h2>Editing {categoryName}</h2>
        </Modal.Header>
        <Modal.Body>
            <CatForm setShowEdit={setShowEdit} getCategories={getCategories} category={category} />
        </Modal.Body>
    </Modal>
  )
}