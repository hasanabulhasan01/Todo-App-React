import { useState } from "react";
import './App.css';

function App() {
  const [list, setList] = useState ([])
  const [inputText, setInputText] = useState()
  const [updatedIndex, setUpdatedIndex] = useState()
  const [updateButton, setUpdateButton] = useState(false)

  function addItem() {
    //purpose:TO push the input value into the list
    //available:List  not-available:input

    const copyList = [...list]
    copyList.push(inputText)  
    setList(copyList)
    setInputText("")
  }

  function updateText(e) {
    //purpose: To update the input text state whenever the input value changes.

    const value = e.target.value
    setInputText(value)
  }

  function deleteItem(index) {
    //pupose:To delete the item from the list whose index's delete button is clicked
    //available:List  not-available:index

    const copyList = [...list]
    copyList.splice(index, 1)
    setList(copyList)
  }

  function editItem(index , item){
    //pupose:To put index value in the input field , to change the add button to update button
    setUpdateButton(true)
    setUpdatedIndex(index)
    setInputText(item)
  }

  function updateItem(){
    //purpose: Update the index with the new value which is edited in the input field.
    //we use ...list(spread operator) to copy the list because if we copy the list and change it then 
    //the initial list will also be changed.
    const copyList = [...list]
    copyList.splice(updatedIndex, 1 , inputText)
    setList(copyList)
    setInputText("")
    setUpdateButton(false)
  }


  return(
    <div className="App">
      <div className="App-header">

        {/* we use value attibute to save the value of input field in the state. */}
        <input value={inputText} onChange={updateText} placeholder="Enter task to do"/>
        
        { updateButton ? <button onClick={updateItem}>Update</button> : <button onClick={addItem}>Add</button> }

        <ul>
          {list.map(function(item, index){
            return<li>
              {item}
              <button onClick={() => deleteItem(index)}>Delete</button>
              <button onClick={() => editItem(index ,item)}>Edit</button>
              </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default App;
