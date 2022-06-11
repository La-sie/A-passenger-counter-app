let countEl = document.getElementById("count-el")
let count = 0

let saveEl = document.getElementById("save-el")

function increment() {
       count +=  1
       countEl.textContent = count
   
}

function save() {
         counter = count + " - "
         saveEl.textContent += counter         
         countEl.textContent = 0
         count = 0 
}

