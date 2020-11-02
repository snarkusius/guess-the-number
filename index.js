// Read instructions. And remove this line.
let input = document.getElementById("user-input")
let output = document.getElementById("outputtext")
let guess = document.getElementById("Guess")
let desplayHiskore = document.getElementById("message")
let randomNumber = Math.round(Math.random() * 100)
let array = []
let hiskore = []
if(window.localStorage.getItem('hiskore')>0){
    hiskore.push (window.localStorage.getItem('hiskore'))
    desplayHiskore.innerHTML = `Guess a number between 0 and 100 <br> hiskore (${Math.min(...hiskore)})`
}

    

console.log(window.localStorage.getItem('hiskore'))
console.log(randomNumber)
document.addEventListener('keyup', function (event) {
    if(event.key == "Enter"){
        

        if(input.value == randomNumber){
            array.push(`<span style="color: #0000a0">${input.value}</span>`)
            output.innerHTML = `korekt gess(${array.length})`
            hiskore.push(array.length) 
            reset()
            window.localStorage.setItem("hiskore",Math.min(...hiskore).toString())
        }
        else{
            if(input.value>randomNumber){
                output.innerHTML = "lover"
                array.push(`<span style="color: green">${input.value}</span>`)
            }
            else{
                output.innerHTML = "higher"
                array.push(`<span style="color: red">${input.value}</span>`)
            }
            
        }
        console.log(array)
        guess.innerHTML = array.join("<br>") 
        input.value = ""
    }})
function reset(){
    array = []
    guess.innerHTML = array 
    randomNumber = Math.round(Math.random() * 100)
    console.log(randomNumber)
    console.log(hiskore)
    desplayHiskore.innerHTML = `Guess a number between 0 and 100 <br> hiskore (${Math.min(...hiskore)})`
}