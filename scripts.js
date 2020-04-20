const filter = async(value) =>
   fetch(`https://jsonplaceholder.typicode.com/users?name_like=${value}`)
    .then(res => res.json())

const debounceEvent = (time) => {
  return function(fn, wait = 1000) {
    clearTimeout(time)

    time = setTimeout(() => {
      fn()
    }, wait)
  }
}

const debounce = debounceEvent()

function handleKeyUp(event) {
  debounce(() => {
    filter(event.target.value)
      .then(data => console.log(data.map(user => user.name)))
  }, 500)
}

document.querySelector('input').addEventListener('keyup', handleKeyUp)
