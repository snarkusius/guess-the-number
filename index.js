// Read instructions. And remove this line.
let input = document.getElementById("user-input")
console.log(Math.floor(Math.random() * 50))

document.addEventListener('keyup', function (event) {
    if(event.key == "Enter"){
        console.log(input.value)
    }})