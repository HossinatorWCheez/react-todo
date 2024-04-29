import './ToDos.css'

import { useState, useEffect } from "react"
import { useAuth } from '../../contexts/AuthContext'
import axios from "axios"
import SingleToDo from './SingleToDo'
import FilterCat from './FilterCat';
import ToDoCreate from './ToDoCreate'

export default function ToDos() {
    const [toDos, setToDos] = useState([]);

    const [showCreate, setShowCreate] = useState(false);

    const { currentUser } = useAuth()
    
    const [filter, setFilter] = useState(0);
    
    const getToDos = () => {
        axios.get('http://todoapi.ethanjamesaa.com/api/ToDos').then(response => {
            setToDos(response.data)
        })
    }

    useEffect(() => {
        getToDos()
    }, []);

  return (
    <section className="toDos">

        <article className="toDos p-2">
            <h1 className="text-center">ToDos Dashboard</h1>
        </article>

        {/* BEGIN CREATE UI */}
        {currentUser.email === import.meta.env.VITE_ADMIN_EMAIL &&
            <div className="p-2 mb-3 text-center toDoCreate">
                <button onClick={() => setShowCreate(!showCreate)} className="btn btn-outline-info">
                    {!showCreate ? 'Create New ToDo' : 'Close Form'}
                </button>
                <div className="createContainer">
                    {showCreate &&
                        <ToDoCreate getToDos={getToDos} setShowCreate={setShowCreate} />
                    }
                </div>
            </div>
        }
        {/* END CREATE UI */}

        <FilterCat setFilter={setFilter} />

        <div className="container p-2">
            <table className="table bg-info table-dark table-hover table-striped my-3" id='toDoTable'>
                <thead className="text-uppercase toDo">
                    <tr>
                        <th>Complete?</th>
                        <th>ToDo</th>
                        <th>Status</th>
                        <th>Category</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>

                  {filter === 0 ? toDos.map(t => 
                      <SingleToDo key={t.toDoId} toDo={t} getToDos={getToDos} />
                  ) : toDos.filter(t => t.categoryId === filter).map(t => 
                  <SingleToDo key={t.toDoId} toDo={t} />)}

                </tbody>
            </table>
        </div>
        
        {filter !== 0 && toDos.filter(t => t.categoryId === filter).length === 0 && 
            <h2 className="alert alert-warning text-dark text-center">There are no results for this category.</h2> }
    </section>
  )
}