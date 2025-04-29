const main = document.getElementById("main")


main.innerText = "changed with javascript"
main.style.backgroundColor = 'yellow'
main.style.fontSize = "40px"
main.style.width = "50%"
console.log(main.innerText)

const one = document.getElementsByClassName("one")
console.log(one)

const two = document.querySelector("#two")
console.log(two)

const three = document.querySelectorAll(".three")
console.log(three)

const child = document.createElement("h1")
child.innerText = "this is a h1 with js"

main.appendChild(child)

// alert("this is a alert")


//event listeners

main.addEventListener("click", function(){
    main.innerText = "button clicked"
    main.style.backgroundColor = "blue"
})