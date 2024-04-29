import { useState, useEffect } from "react"
import { Formik, Field, Form } from "formik"
import { toDoSchema } from "../../utilities/validationSchema"
import axios from "axios"

export default function ToDoForm({ toDo = '', setShowCreate, getToDos, setShowEdit }) {
    const { toDoId, name, done, categoryId} = toDo || ''

    //We get the categories from our API to populate a select list for categoryId in the form
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://todoapi.ethanjamesaa.com/api/Categories').then(response => {
            console.log(response)
            setCategories(response.data)
        })
    }, []);

    const handleSubmit = (values) => {
        console.log(values)
        if(!toDo){
            const newToDo = {
                name: values.name,
                done:false,
                categoryId: values.categoryId
            }

            //Make the POST request with axios
            axios.post('http://todoapi.ethanjamesaa.com/api/ToDos', newToDo).then(() => {
                setShowCreate(false) //Close the Create form in resources
                getToDos() //Update the tiles in resources
            })
        } else {
            const toDoToEdit = {
                toDoId: toDoId,
                name: name,
                done: done,
                categoryId: categoryId
            }
            
            axios.put(`http://todoapi.ethanjamesaa.com/api/ToDos/${toDoId}`, toDoToEdit).then(() => {
                setShowEdit(false)
                getToDos()
            })
        }
    }

  return (
    <Formik
        initialValues={{
            name: toDo ? name : '',
            done: toDo ? done : 0,
            categoryId: toDo ? categoryId : ''
        }}
        validationSchema={toDoSchema}
        onSubmit={ (values) => handleSubmit(values) }>
        {/* For simplicity, start with the below structure and add the Form to the empty parens
            {({errors, touched}) => ()} */}
        {({errors, touched}) => (
            <Form id="toDoForm" className="text-center">
                <div className="form-group m-3">
                    <Field name='name' className='form-control' placeholder='Name' />
                    {errors.name && touched.name && <div className="text-danger">{errors.name}</div> }
                </div>

                <div className="form-group m-3">
                    <Field as='select' name='categoryId' className='form-control' >
                        <option value='' disabled>[-- Please Choose --]</option>
                        {/* Below we map an option for each category in our DB */}
                        {categories.map(cat => 
                            <option key={cat.categoryId} value={cat.categoryId}>{cat.categoryName}</option>
                        )}
                    </Field>
                </div>

                <div className="form-group m-3">
                    <button type="submit" className="btn btn-dark m-3">Submit ToDo to API</button>
                </div>
            </Form>
        )}
    </Formik>
  )
}