let time = null

filter('Leanne')

async function filter(value) {
  return fetch(`https://jsonplaceholder.typicode.com/users?name_like=${value}`)
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
