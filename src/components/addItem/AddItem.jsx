import { useState } from "react"
import '../style.css'

export const AddItem = ({setNewItem }) => {

    const [textItem, setTextItem] = useState("");
    const handleAddItem = () => {
        if(textItem!=null){
            setNewItem(textItem);
            setTextItem("");
        }
    }

    const changeInputItem = (event) => {
        setTextItem(event.target.value);
    }

    return (
        <div className="addItem">
            <span>Введите новую задачу:</span>
            <input type="text" onChange={changeInputItem} value={textItem}/>
            <button onClick={handleAddItem}>Добавить</button>
        </div>
    )
}