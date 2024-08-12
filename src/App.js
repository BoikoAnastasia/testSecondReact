import { useEffect, useState } from 'react';
import { dataGet } from './API/getData';
import { ListItem } from './components/listItem/ListItem';
import { AddItem } from './components/addItem/AddItem';
import { time } from './trash/getTime';
import './App.css';

function App() {
  const [dataList, setDataList] = useState([]);
  const [newItem, setNewItem] = useState(null);

  //get list items
  useEffect(() => {
    const data = async () => {
      const todo = await dataGet();
      setDataList(todo);
    }
    data();
  }, [])

  //add new item
  useEffect(() => {
    if (newItem == null) return;
    setDataList(prevState => ([
      ...prevState,
      {
        "userId": 1,
        "id": time(),
        "title": newItem,
        "completed": false
      }
    ]))
  }, [newItem])

  //remove item
  const deleteItem = (id) => {
    const newArray = dataList.filter((item) => item.id !== id);
    setDataList(newArray);
  }

  return (
    <div className="App">
      <AddItem setNewItem={setNewItem} />
      {
        dataList && <ListItem list={dataList} deleteItem={deleteItem} />
      }

    </div>
  );
}

export default App;
