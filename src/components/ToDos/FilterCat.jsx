import { useState, useEffect } from "react"
import axios from "axios"

export default function FilterCat({setFilter}) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://todoapi.ethanjamesaa.com/api/Categories').then(response => {
            console.log(response)
            setCategories(response.data)
        })
    }, []);

  return (
    <div className="text-center mt-5">
        <button onClick={() => setFilter(0)} className="btn btn-outline-info m-1">All</button>
        {categories.map(c =>
            <button key={c.categoryId} onClick={() => setFilter(+c.categoryId)} className="btn btn-outline-info m-1">{c.categoryName}</button>
        )}

    </div>
  )
}