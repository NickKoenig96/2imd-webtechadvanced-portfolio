

class Note {
    constructor(title) {
      this.title = title;
       this.element = this.createElement(title);
      

    }
  
    createElement(title) {
      let newNote = document.createElement('li');
      newNote.classList.add(`task`);
  
      newNote.innerHTML = `<p>${title}</p>`;

      newNote.addEventListener('click', this.remove.bind(newNote));

  
      return newNote;
    }
  
    add() {
      // HINT🤩
      // this function should append the note to the screen somehow
      let task = this.element;
      console.log(task);
      document.querySelector('#taskList').prepend(task);
    }
  
    saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
    }
  
    remove() {
      let removeTask = document.querySelector(`#taskList`);
      removeTask.removeChild(this)



 
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      // remove the item from screen and from localstorage
    }
  }
  
  class App {
    constructor() {
      console.log("👊🏼 The Constructor!");
  
      // HINT🤩
      // pressing the enter key in the text field triggers the createNote function
      this.txtTodo = document.querySelector("#taskInput");
      this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
      // read up on .bind() -> we need to pass the current meaning of this to the eventListener
      // when the app loads, we can show previously saved noted from localstorage
      // this.loadNotesFromStorage();


      
    }
  
    loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
    }
  
    createNote(e) {

      if(e.key === "Enter"){
        e.preventDefault();

        console.log(this.txtTodo.value);

       


        let addTitleNote = document.querySelector("#taskInput").value;
        let note = new Note(addTitleNote);
        note.add();

        console.log(`test ${note}`)



        //console.log(addTitleNote);
        
        //console.log(note);

        //console.log(e.key);
        this.reset();

      }




      // this function should create a new note by using the Note() class
      // HINT🤩

     
      // note.saveToStorage();


      // clear the text field with .reset in this class
      // if (e.key === "Enter")
    }
  
    reset() {
      this.txtTodo.value = "";
    }
  }
  
  let app = new App();
  