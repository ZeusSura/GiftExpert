import React,{useState} from 'react'
import PropTypes from 'prop-types'

const CategoryAdd = ({setCategorias}) => {

    const [inputValue,setInputValue] = useState('')
    const handleInput = e =>{
        setInputValue(e.target.value)
    }
    const handleSubmit  = e=>
    {        
        e.preventDefault()
        if(inputValue.trim()==='')
        {
            return
        }
        setCategorias(categorias=>[inputValue,...categorias])
        setInputValue('')
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
            id="categoria"
            name="categoria"
            className="input-categoria"
            type="text"
            value={inputValue}
            onChange={handleInput}
            />
        </form>
    )
}


CategoryAdd.propTypes = {

    setCategorias:PropTypes.func.isRequired
}
export default CategoryAdd ;