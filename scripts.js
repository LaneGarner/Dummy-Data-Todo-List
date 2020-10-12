// const list = document.getElementById("todo-list");
// console.log(toDos);
let arrayOfTodos = [
  {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]

  let arrayFilter = [];

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }


  

  const populateTodos = () => {
      let toDos = document.getElementById('todo-list');

      for (let i = 0; i < arrayOfTodos.length; i++) {
        // let addLI = document.createElement('li');
        // let text = document.createTextNode(arrayOfTodos[i].title);
        // addLI.appendChild(text);

        let addLI = document.createElement('li');
        addLI.innerHTML = arrayOfTodos[i].title;
        toDos.appendChild (addLI);

      if (arrayOfTodos[i].completed == false) {
          addLI.classList.add('incomplete');
          addLI.setAttribute("id", i);
        //   const checkMark = addLI.insertAdjacentHTML('beforeend', ' <i class="far fa-check-circle"></i>');
        // //   checkMark.classList.add(i);
        //   checkMark.addEventListener('mouseup', function () {
        //       arrayOfTodos[this.className].completed == true;
        //   }
          // )
      } else {
          addLI.classList.add('complete');
      } 
    // toDos.appendChild(addLI);
  }
}

// const clearTodos = () => {
//   document.getElementById("todo-list").innerHTML = "";
// }

const findID = () => {
  let toDos = document.getElementById('todo-list');
  document.getElementById("todo-list").innerHTML = "";
  // toDos.innerHTML = "";
  const myID = document.getElementById('user').value;
  console.log(myID);
  arrayFilter = arrayOfTodos.filter(array => array.userId == myID);
  
  for (let i = 0; i < arrayFilter.length; i++) {  
  //  let addLI = document.createElement('li');
  //  let text = document.createTextNode(arrayOfTodos[i].title);
  //   addLI.appendChild(text); 
    
    
    let addLI = document.createElement('li');
    addLI.innerHTML = arrayFilter;
    toDos.appendChild(addLI);
  }
}


// const filterTodos = () => {
  //   const myID = document.getElementById('user');

  //   arrayOfTodos.userID

  // }


/* 
Then capture the ol item into a variable (getElementById)

createElement to make a new LI

createTextNode inside the li using the title property.

Now append the text to the new element

Then append the element to the ol element.

Put all of that in side your populateTodos function.

Now that you have one element created and showing up on the screen, put the same code inside a for loop and iterate over the length of the array. But now just change out [0] for [i]! (Refer back to your for loop lesson if needed)

Make the text appear red if the completed property equals false. Set it to another color if it equals true.
*/