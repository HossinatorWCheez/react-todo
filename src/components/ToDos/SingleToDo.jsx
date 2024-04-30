import axios from 'axios'
import { useAuth } from '../../contexts/AuthContext'
import { useState } from 'react'
import ToDoEdit from './ToDoEdit'
import './ToDos.css'

export default function SingleToDo({toDo, getToDos}) {
    const { toDoId, name, done, category, categoryId } = toDo

    const [showEdit, setShowEdit] = useState(false);

    const { currentUser } = useAuth();

    const flipDone = () => {
        let updatedToDo = {
            toDoId: toDoId,
            name: name,
            done: !done,
            categoryId: categoryId
        }
        axios.put(`http://todoapi.ethanjamesaa.com/api/ToDos/${toDoId}`, updatedToDo).then(response => {
            console.log(response)
            getToDos()
        })
    }

    const deleteToDo = (id) => {
        if(window.confirm(`Are you sure you want to delete ${name}?`)) {
            axios.delete(`http://todoapi.ethanjamesaa.com/api/ToDos/${id}`).then(getToDos)
        }
    }

  return (
    <>
      <tr>
        {done === false ?
          <td><button onClick={() => flipDone()} className="btn btn-outline-info">&#10004;</button></td> 
          : <td><button onClick={() => flipDone()} className="btn btn-outline-info">&#10006;</button></td>
        }
          <td>{name}</td>
          <td>{done === false ? 'Incomplete' : 'complete' }</td>
          <td>{category.categoryName}</td>
          {currentUser.email === import.meta.env.VITE_ADMIN_EMAIL ?
            <td>
              <button onClick={() => setShowEdit(true)} className="btn btn-success mx-2">&#x270D;</button>
              <button onClick={() => deleteToDo(toDoId)} className="btn btn-danger">&#10007;</button>
            </td> :
            <td>
            <button disabled className="btn btn-success mx-2">&#x270D;</button>
            <button disabled className="btn btn-danger">&#10007;</button>
          </td>
          }    
      </tr>
      <ToDoEdit showEdit={showEdit} setShowEdit={setShowEdit} getToDos={getToDos} toDo={toDo} />
    </>
  )
}