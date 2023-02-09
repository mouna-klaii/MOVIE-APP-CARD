import React from 'react'
import { Form } from 'react-bootstrap'



const FilterMovies = ({InputSearch, SetInputSearch}) => {
  return (
    <div>
        <Form.Control type="text" placeholder= "Enter your movie title"
      onChange={(e)=> SetInputSearch(e.target.value)} value={InputSearch}
       />
    </div>
  )
}

export default FilterMovies
