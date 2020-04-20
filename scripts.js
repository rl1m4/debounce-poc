let time = null

const filter = async(value) =>
   fetch(`https://jsonplaceholder.typicode.com/users?name_like=${value}`)
    .then(res => res.json())

function debounceEvent(value){
  clearTimeout(time)

  time = setTimeout(() => {
    filter(value)
      .then(data => console.log(data.map(user => user.name)))
  }, 1000);
}

function handleKeyUp(event) {
  debounceEvent(event.target.value)
}

document.querySelector('input').addEventListener('keyup', handleKeyUp)
