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
      console.log("Hi");
      let node = document.createElement('li');
      let textnode = document.createTextNode(arrayOfTodos[0].title);
      node.appendChild(textnode);
      document.getElementById('todo-list').appendChild(node);
  }


/* 
Then capture the ol item into a variable (getElementById)
createElement to make a new LI
createTextNode inside the li using the title property.
Now append the text to the new element
Then append the element to the ol element.
Put all of that inside your populateTodos function.
*/