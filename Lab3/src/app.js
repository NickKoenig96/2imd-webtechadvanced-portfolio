

class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }

  createElement(title) {
    //create list element
    let newNote = document.createElement('li');
    newNote.classList.add(`task`);
    newNote.innerHTML = `<p>${title}</p>`;

    //register click on note and remove
    newNote.addEventListener('click', this.remove.bind(newNote));


    return newNote;
  }

  add() {

    // append the note to the screen in the ul
    let task = this.element;
    console.log(task);
    document.querySelector('#taskList').prepend(task);
  }

  saveToStorage() {

    // store array off tasks in localStorage
    let TaskData = JSON.parse(localStorage.getItem(`TaskData`));
    if (TaskData == null) {
      TaskData = [];
    }

    TaskData.push(this.title);
    localStorage.setItem(`TaskData`, JSON.stringify(TaskData));
  }

  remove() {
    //remove task
    let removeTask = document.querySelector(`#taskList`);
    removeTask.removeChild(this)

    //remove task from array in localStorage
    let TasksArray = JSON.parse(localStorage.getItem(`TaskData`));
    let title = this.querySelector(`p`).innerHTML;
    console.log(` remove ${title}`);
    // index of chosen Task
    let ArrayIndex = TasksArray.indexOf(title);
    // remove chosen task form array local storage
    TasksArray.splice(ArrayIndex, 1);
    //update array local storage
    localStorage.setItem(`TaskData`, JSON.stringify(TasksArray));

  }
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");

    // detect keypress
    this.txtTodo = document.querySelector("#taskInput");
    this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
    
    this.loadNotesFromStorage();
  }

  loadNotesFromStorage() {
  
    // load all notes from storage and add them to the screen
    let TaskStorage = JSON.parse(localStorage.getItem(`TaskData`));
    if (TaskStorage.length > 0) {
      TaskStorage.forEach(title => {
        let note = new Note(title);
        note.add();
      });
    }
  }

  createNote(e) {
    //check if keypresse === enter
    if (e.key === "Enter") {
      //prevent 'refresh'
      e.preventDefault();
      //give value off input to Note class
      let addTitleNote = document.querySelector("#taskInput").value;
      let note = new Note(addTitleNote);
      note.add();

      note.saveToStorage();

      this.reset();

    }

  }

  reset() {
    this.txtTodo.value = "";
  }
}

let app = new App();
