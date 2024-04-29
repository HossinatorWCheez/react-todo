import { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import axios from "axios"
import CatEdit from "./CatEdit"

export default function SingleCategory({category, getCategories}) {
    const { categoryId, categoryName, categoryDescription } = category

    const {currentUser} = useAuth()

    const [showEdit, setShowEdit] = useState(false);

    async function deleteCat(id) {
      if(window.confirm(`Are you sure you want to delete ${categoryName}?`)){
        const toDos = await axios.get(`http://todoapi.ethanjamesaa.com/api/ToDos`).then(t => {
          return t.data
        })
        
        const filteredToDos = toDos.filter(t => t.categoryId === id)
        if(filteredToDos.length > 0){
          window.alert(`Error! Cannot delete the Category ${categoryName} because it contains the following ToDos:
          ${filteredToDos.map(t => `\n${t.name}`)}
          \nPlease delete these ToDos or reassign them to different category before deleting ${categoryName}.`)
        } else {
          axios.delete(`http://todoapi.ethanjamesaa.com/api/Categories/${id}`).then((getCategories))
        }
        
      } 
    }

  return (
    <tr>
        <td>{categoryName}</td>
        <td>{categoryDescription}</td>
        {/* BEGIN EDIT UI */}
        {currentUser.email === import.meta.env.VITE_ADMIN_EMAIL &&
          <td>
            <button onClick={() => setShowEdit(true)} className="btn btn-success mx-2">&#x270D;</button>
            <button onClick={() => deleteCat(categoryId)} className="btn btn-danger">&#10007;</button>
            {showEdit &&
              <CatEdit
                setShowEdit={setShowEdit} //Tied to closing the Modal in catEdit
                showEdit={showEdit} //Tied to showing the Modal (if true, Modal is shown)
                getCategories={getCategories} //Allows us to refresh the table in Categories.jsx
                category={category} />
            }
          </td>
        }
        {/* END EDIT UI */}
    </tr>
  )
} 
