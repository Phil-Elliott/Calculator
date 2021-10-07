const result = document.querySelector('.result')
const buttons = document.querySelectorAll('.button')
const clear = document.querySelector('.clear')
const equals = document.querySelector('.equals')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const times = document.querySelector('.times')
const divide = document.querySelector('.divide')

for (let i = 0; i < buttons.length; i++){
	buttons[i].addEventListener('click', () => {
		result.innerHTML += buttons[i].innerHTML
	})
}

minus.addEventListener('click', () => {
	result.innerHTML += '-'
})
/*
function ke(e){
	if (e.keyCode === 48) {
		return result.innerHTML += '-'
}
}

result.addEventListener('keypress', ke)
*/
plus.addEventListener('click', () => {
	result.innerHTML += '+'
})

times.addEventListener('click', () => {
	result.innerHTML += '*'
})

divide.addEventListener('click', () => {
	result.innerHTML += '/'
})

clear.addEventListener('click', () => {
	result.innerHTML = ''
})

equals.addEventListener('click', () => {
	result.innerHTML = eval(result.innerHTML)
})












/* 1) Have the buttons once clicked go into the result text (use innerHTML or innerText)                 done
   2) Have it so that an aswer is found once the = button is pushed
          needs to find the solution 
          needs to put the solution into the result text 
   3) Have the result text clear if the C button is clicked on 
   4) Can also add the ability to press the numbers on your keypad

   buttons needed 
   - button    (can i get the innerhtml to return)
   - result

   */