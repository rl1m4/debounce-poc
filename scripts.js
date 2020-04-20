let time = null

const filter = async(value) =>
   fetch(`https://jsonplaceholder.typicode.com/users?name_like=${value}`)
    .then(res => res.json())

function handleKeyUp(event) {
  clearTimeout(time)

  time = setTimeout(() => {
    filter(event.target.value)
      .then(data => console.log(data))
  }, 1000);
}

document.querySelector('input').addEventListener('keyup', handleKeyUp)
