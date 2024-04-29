import { Formik, Form, Field } from "formik"
import { catSchema } from "../../utilities/validationSchema"
import axios from "axios"

export default function CatForm({category = '', setShowCreate, getCategories, setShowEdit}) {
    const { categoryId, categoryName, categoryDescription } = category || ''

    const handleSubmit = (values) => {
        console.log(values)
        if(!category){
            const catToCreate = values

            axios.post(`http://todoapi.ethanjamesaa.com/api/Categories`, catToCreate).then(() => {
                setShowCreate(false)
                getCategories()
            })
        } else {
            const catToEdit = {
                categoryId: categoryId,
                categoryName: values.categoryName,
                categoryDescription: values.categoryDescription
            }
            axios.put(`http://todoapi.ethanjamesaa.com/api/Categories/${categoryId}`, catToEdit).then(() => {
                setShowEdit(false)
                getCategories()
            })
        }
    }

  return (
    <div className="createCategory m-2 text-white text-center">
        <Formik 
            initialValues={{
                categoryName: category ? categoryName : '',
                categoryDescription: category ? categoryDescription : '' }}
            validationSchema={catSchema}
            onSubmit={(values) => handleSubmit(values)} >
            {({errors, touched}) => (
                <Form id="catForm" className="row text-center m-auto">
                    <div className="form-group m-1 p-1">
                        <Field name='categoryName' className='form-control' placeholder='Name' />
                        {errors.categoryName && touched.categoryName && <div className="text-danger">{errors.categoryName}</div> }
                    </div>

                    <div className="form-group m-1 p-1">
                        <Field name='categoryDescription' className='form-control' placeholder='Description' />
                        {errors.categoryDescription && touched.categoryDescription && <div className="text-danger">{errors.categoryDescription}</div> }
                    </div>

                    <div className="form-group m-1">
                        <button type='submit' className="btn btn-dark">Submit Category to API</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
  )
}
