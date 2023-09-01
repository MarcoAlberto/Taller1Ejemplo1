import React, {useState, useEffect} from "react";
import Todo from "../components/Todo";
import elementos from "../components/elementos";

const Form = () => {
    const [fruta, setTodo] = useState({})
    const [frutas, setTodos] = useState([
        
    ])
    const handleChange = e => setTodo({[e.target.name]: e.target.value})
    const handleClick = e => {
        if(Object.keys(fruta).length === 0 || fruta.fruta.trim() === ''){
            alert('Debe escoger un productor')
            return
        }
        setTodos([...frutas, fruta])
    }
    const deleteTodo = indice => {
        const newTodos = [...frutas]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }
    return(
        <>
            <form onSubmit={e => e.preventDefault()}>
                <select id="fruta" name="fruta" onChange={handleChange}>
                    <option selected disabled>Escoga un producto</option>
                    {elementos.producto.map((producto) => {
                        return <option key={producto.precio} value={Object.values(producto)}>{producto.nombre}</option>
                    })}
                </select>
                <button onClick={handleClick}>Agregar</button>
            </form>
            {
                frutas.map((value, index) => (
                    <Todo fruta={value.fruta} key={index} index={index} deleteTodo={deleteTodo}/>
                ))
            }
        </>
    )
}

export default Form