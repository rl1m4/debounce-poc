let time = null

function handleKeyUp(event) {
  clearTimeout(time)

  time = setTimeout(() => {
    console.log(event.target.value)
  }, 1000);
}

document.querySelector('input').addEventListener('keyup', handleKeyUp)
