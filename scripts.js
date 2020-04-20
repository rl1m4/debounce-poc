let time = null

const filter = async(value) =>
   fetch(`https://jsonplaceholder.typicode.com/users?name_like=${value}`)
    .then(res => res.json())
    .then(data => console.log(data))

filter('in')

function handleKeyUp(event) {
  clearTimeout(time)

  time = setTimeout(() => {
    console.log(event.target.value)
  }, 1000);
}

document.querySelector('input').addEventListener('keyup', handleKeyUp)
