// Функція для генерації ID
function generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }
  
  //Class TodoItem
  // Class TodoItem
  class TodoItem {
    constructor(name) {
      this.id = generateId();
      this.name = name;
      this._checked = false;
    }
  
    // Getter for checked field
    get checked() {
      return this._checked;
    }
  
    // Setter for checked field with validation
    set checked(value) {
      if (typeof value !== "boolean") {
        throw new Error("Поле checked може приймати лише значення true або false");
      }
      this._checked = value;
    }
  }
  
   // Class Todolist
  // Class TodoList
  class TodoList {
    constructor(name) {
      this.id = generateId();
      this.name = name;
      this.items = [];
    }
  
    // Method for filling element into Items array  (with validation)
    addItem(item) {
      if (!(item instanceof TodoItem)) {
        throw new Error("Element must be instance of class TodoItem!");
      }
      this.items.push(item);
    }

    // Remove element from array by given id as parameter
    removeItemById(id) {
      this.items = this.items.filter(item => item.id !== id);
    }
  
    // Method for returning element by id
    getItemById(id) {
      return this.items.find(item => item.id === id);
    }
  }



  
  // Create instance of class TodoList
  const todoList = new TodoList("My Todo List");
  
  const item1 = new TodoItem("Task 1");
  const item2 = new TodoItem("Task 2");
  const item3 = new TodoItem("Task 3");
  const item4 = new TodoItem("Task 4");
  
  todoList.addItem(item1);
  todoList.addItem(item2);
  todoList.addItem(item3);
  todoList.addItem(item4);
  console.log("TodoList after adding 4 elements:", todoList);
  
  
  item2.checked = true;
  console.log("TodoList after updating field checked in Task 2 item:", todoList);
  

  todoList.removeItemById(item1.id);
  todoList.removeItemById(item3.id);
  console.log("Todolist after removing 2 elements:", todoList);