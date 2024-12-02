// import logo from './logo.svg';
import { useState } from 'react';
import './To-do.css';
import { ToastContainer, toast } from 'react-toastify';

function Todo() {
  let [todolist, setToDoList] = useState([]);

  let saveToDoList = (event) => {
    let toname = event.target.toname.value;
    if (!todolist.includes(toname)) {
      let finalDoList = [...todolist, toname]
      setToDoList(finalDoList);
    }
    else {
      toast.info('To do name Allready exists...', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    event.preventDefault();
  }
  let list = todolist.map((value, index) => {
    return (
      <ToDoListItem value={value} key={index} indexNumber={index} todolist={todolist} setToDoList={setToDoList} />
    )
  })
  return (
    <div className='bg-cal'>
    <div className="App">
        <ToastContainer />
      <div className="top-input">
        <h4>To-Do List 📝</h4>
        <form className="inputbox" onSubmit={saveToDoList}>
          <input className='input' type="text" name='toname' placeholder="Add your task" /><button className='button'>Add</button>
        </form>
      </div>
      <div className="listbox">
        <ul className='ul'>
          {list}
        </ul>
      </div>
    </div>
    </div>
  );
}

function ToDoListItem({ value, indexNumber, todolist, setToDoList }) {
  let [status, setstatus] = useState(false);
  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i !== indexNumber)
    setToDoList(finalData);
    
  }
  let checkedStatus = () => {
    setstatus(!status)
  }
  return (
    <li className={`li ${(status) ? 'checked' : ''}`} onClick={checkedStatus}> {value}<span onClick={deleteRow}>×</span></li>
  )
}

export default Todo;
