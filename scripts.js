let time = null

filter()

function filter() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
}

function handleKeyUp(event) {
  clearTimeout(time)

  time = setTimeout(() => {
    console.log(event.target.value)
  }, 1000);
}

document.querySelector('input').addEventListener('keyup', handleKeyUp)
