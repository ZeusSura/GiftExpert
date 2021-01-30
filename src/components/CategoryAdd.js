import React,{useState} from 'react'


export const CategoryAdd = () => {

    const [inputValue,setInputValue] = useState('')
    const handleInput = e =>{
        
        setInputValue(e.target.value)

    }
    const handleSubmit  = e=>
    {
        e.preventDefault()
        console.log('submit')
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
