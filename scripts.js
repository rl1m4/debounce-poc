function handleKeyUp(event) {
  setTimeout(() => {
    console.log(event.target.value)
  }, 1000); //still run all the time
}

document.querySelector('input').addEventListener('keyup', handleKeyUp)
