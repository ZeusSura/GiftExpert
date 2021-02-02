import React,{useState} from 'react'


export const CategoryAdd = ({setCategorias}) => {

    const [inputValue,setInputValue] = useState('')
    const handleInput = e =>{
        setInputValue(e.target.value)
    }
    const handleSubmit  = e=>
    {
        e.preventDefault()
        if(inputValue.trim()==='')
        {
            return alert('Ingrese una categoria por favor')
        }
        setCategorias(categorias=>[inputValue,...categorias])
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={inputValue}
            onChange={handleInput}
            />
        </form>
    )
}

export default CategoryAdd ;