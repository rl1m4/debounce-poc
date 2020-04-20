const filter = async(value) =>
   fetch(`https://jsonplaceholder.typicode.com/users?name_like=${value}`)
    .then(res => res.json())

const debounceEvent = (fn, wait = 1000, time) => {
  return function() {
    clearTimeout(time)

    time = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}

function handleKeyUp(event) {
  filter(event.target.value)
    .then(data => console.log(data.map(user => user.name)))
}

document.querySelector('input').addEventListener('keyup', debounceEvent(handleKeyUp, 500))
