const filter = async(value) =>
   fetch(`https://jsonplaceholder.typicode.com/users?name_like=${value}`)
    .then(res => res.json())

const debounceEvent = () => {
  let time = null

  return function(value) {
    clearTimeout(time)

    time = setTimeout(() => {
      filter(value)
        .then(data => console.log(data.map(user => user.name)))
    }, 500)
  }
}

const debounce = debounceEvent()

function handleKeyUp(event) {
  debounce(event.target.value)
}

document.querySelector('input').addEventListener('keyup', handleKeyUp)
