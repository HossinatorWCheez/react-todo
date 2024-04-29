import * as Yup from 'yup'

const catSchema = Yup.object().shape({
    categoryName: Yup.string().max(25, 'Max 25 characters').required('Category name is required!'),
    categoryDescription: Yup.string().max(50, 'Max 50 characters')
})

const toDoSchema = Yup.object().shape({
    name: Yup.string().max(25, 'Max 25 characters').required(),
    done: Yup.bool().required(),
    categoryId: Yup.number()
})

export { catSchema, toDoSchema }