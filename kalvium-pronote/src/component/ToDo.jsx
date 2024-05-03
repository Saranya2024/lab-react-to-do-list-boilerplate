import React, { useState } from 'react';
import './ToDo.css';

const App = () => {
  const [toDos, setToDos] = useState([]);

  const handleAddToDo = (newToDo) => {
    setToDos([...toDos, newToDo]);
  };

  const handleDeleteToDo = (index) => {
    const updatedToDos = [...toDos];
    updatedToDos.splice(index, 1);
    setToDos(updatedToDos);
  };

  const handleUpdateToDo = (index, updatedToDo) => {
    const updatedToDos = [...toDos];
    updatedToDos[index] = updatedToDo;
    setToDos(updatedToDos);
  };

  const handleUpdate = (index) => {
    const updatedToDo = prompt('Enter updated to-do:', toDos[index]);
    if (updatedToDo !== null) {
      handleUpdateToDo(index, updatedToDo);
    }
  };

  return (
    <div className="App">
      <Form onAddToDo={handleAddToDo} />
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index}>
            {toDo}
            <button onClick={() => handleDeleteToDo(index)}>Delete</button>
            <button onClick={() => handleUpdate(index)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};


const Form = ({ onAddToDo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    onAddToDo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new to-do"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default App;
