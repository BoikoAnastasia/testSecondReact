import { useState } from 'react';
import '../style.css'

export const Item = ({ item, deleteItem }) => {

    const [valueChecked, setvalueChecked] = useState(item.completed);
    const [newTitle, setNewTitle] = useState("");
    const [itemTitle, setItemTitle] = useState(item.title);
    const [isChange, setIsChange] = useState(false);

    const changeItem = () => {
        setIsChange(!isChange);
    }

    const handleChangeTitle = (e) => {
        setNewTitle(e.target.value)
    }

    const removeNewTitle = () => {
        setNewTitle("");
        setIsChange(false);
    }
    const saveNewTitle = () => {
        setItemTitle(newTitle);
        setNewTitle("");
        setIsChange(false);
    }

    return (
        <div className={valueChecked ? "item done" : 'item'}>
            <div className='check-item'>
                <span>Отметить выполненную задачу:</span>
                <input type="checkbox" onChange={() => setvalueChecked(!valueChecked)} name="" id={item.id} checked={valueChecked} />
            </div>
            <div>
                {
                    isChange ?
                        (
                            <input type="text" onChange={handleChangeTitle} />
                        ) :
                        (
                            <strong>{item.id}. {itemTitle}</strong>
                        )
                }
            </div>
            <div className="post__Btn">
                {
                    isChange ?
                        (
                            <div className='btns'>
                                <button onClick={saveNewTitle}>Сохранить</button>
                                <button onClick={removeNewTitle}>Отмена</button>
                            </div>
                        ) :
                        (
                            <div className='btns'>
                                <button onClick={() => deleteItem(item.id)}>Удалить</button>
                                <button onClick={changeItem}>Изменить</button>
                            </div>
                        )
                }
            </div>
        </div>
    )
}