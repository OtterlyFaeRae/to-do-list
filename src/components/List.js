import { useState } from "react"
import Form from "./Form"

const List = () => {
    const [list, setList] = useState([])
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            setList([...list, {task:input, id:new Date().getTime()}])
        setInput("")
        }
    }
    const handleClick = (index) => {
        let newArray = [...list]
        newArray.splice(index, 1)
        setList(newArray)
    }
    return(
        <div id="container">
            <h1>To Do:</h1>
            <h3>Type in items to do below.</h3>
            <Form handleSubmit={handleSubmit} input={input} setInput={setInput}/>
            {list.map((item, index)=>{
                return <ListItem 
                        task={item.task} 
                        handleClick={()=>{handleClick(index)}} 
                        key={item.id}
                    />
            })}
        </div>
    )
}

const ListItem = (props) => {
    const [toDo, setToDo] = useState(true)
    return(
        <div className="list-item" style={toDo ? {color:"black"} : {color:"green"}}>
            <h4>{props.task}</h4>
            <Buttons toDo={toDo} setToDo={setToDo} handleClick={props.handleClick}/>
        </div>
    )
}

const Buttons = ({toDo, setToDo, handleClick}) => {
    return (
        <div>
            <button onClick={()=>{setToDo(!toDo)}}>To Do</button>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default List