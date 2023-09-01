import React from "react";

const Todo = ({fruta, index, deleteTodo}) => {
    return(
        <>
            <div className="list">
                <h3>{fruta}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                <input type="number" id="cantidad" name="cantidad" min={1} max={10}></input>
                <button className="btn-delete" onClick={() => deleteTodo(index)}>x</button>
            </div>
        </>
    )
}

export default Todo