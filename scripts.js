const filter = async(value) =>
   fetch(`https://jsonplaceholder.typicode.com/users?name_like=${value}`)
    .then(res => res.json())

const debounceEvent = () => {
  let time = null

  return function(fn) {
    clearTimeout(time)

    time = setTimeout(() => {
      fn()
    }, 500)
  }
}

const debounce = debounceEvent()

function handleKeyUp(event) {
  debounce(() => {
    filter(event.target.value)
      .then(data => console.log(data.map(user => user.name)))
  })
}

document.querySelector('input').addEventListener('keyup', handleKeyUp)
