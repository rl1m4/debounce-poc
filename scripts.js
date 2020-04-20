function handleKeyUp(event) {
  console.log(event.target.value)
}

document.querySelector('input').addEventListener('keyup', handleKeyUp)
