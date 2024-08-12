import { Item } from "../item/Item"
import '../style.css'

export const ListItem = ({ list, deleteItem }) => {
    return (
        <div className="listItems">
            <h1>Задачи</h1>
            {list.map(item => <Item key={item.id} item={item} deleteItem={deleteItem}/>)}
        </div>
    )
}