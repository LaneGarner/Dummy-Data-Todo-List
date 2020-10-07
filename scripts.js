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
        let addListElement = document.createElement('li');
        addListElement.innerHTML = arrayOfTodos[i].title;
        toDos.appendChild (addListElement);

      if (arrayOfTodos[i].completed == false) {
          addListElement.classList.add('incomplete');
      } else {
          addListElement.classList.add('complete');
      }
  }
}


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