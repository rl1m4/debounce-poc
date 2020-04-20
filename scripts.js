let time = null

let data = []

filter('Leanne')

async function filter(value) {
  data = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${value}`)
    .then(res => res.json())
  console.log(data)
}

function handleKeyUp(event) {
  clearTimeout(time)

  time = setTimeout(() => {
    console.log(event.target.value)
  }, 1000);
}

document.querySelector('input').addEventListener('keyup', handleKeyUp)
