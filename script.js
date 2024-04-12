//  select the element with class calculator from html file
const calculator = document.querySelector('.calculator')
//  select element with class calculatot_keys within previous defined calculator const
const keys = calculator.querySelector('.calculator__keys')
/*
keys.addEventListener('click', e => {
 if (e.target.matches('button')) {

    const key = e.target
    const action = key.dataset.action

    if(!action){
        console.log('number key!')
    }

    if ( action === 'add' || action === 'substract' || action === 'multiply' || action === 'divide'){
        console.log('operator key!')
    }

    if (action === 'decimal') {
    console.log('decimal key!')
    }

    if (action === 'clear') {
    console.log('clear key!')
    }

    if (action === 'calculate') {
    console.log('equal key!')
    }
 }
})

*/

const display = document.querySelector('.calculator__display')


//adds a click event listener to the keys element
keys.addEventListener('click', e => {   


    //checks if the clicked element (e.target) is a <button> element           
    if (e.target.matches('button')) {  

    
    // type of key is determined by the data action attribute
    const key = e.target
    const action = key.dataset.action

    // value of the button
    const keyContent = key.textContent
    // value displayed in the display
    const displayedNum = display.textContent


    // if display contains 0 replace it with clicked key
    if (!action) {      // 
      if (displayedNum === '0') {
        display.textContent = keyContent
      }
      // else append the cliked key to displayed number
      else {
        display.textContent = displayedNum + keyContent
      }
    }

    // of decimal key is pressed append it to the display content
    if ( action === 'decimal'){
        display.textContent = displayedNum + '.'
    }


    if ( action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
      
      // is and operator is clicked it should be highlighted to know that it is active
      key.classList.add('is-depressed')

      // attribute to tell if the previous key is an operator key
      calculator.dataset.previousKeyType = 'operator'

      // storing the value and opeation to work with later 
      calculator.dataset.firstvalue = displayedNum
      console.log(' inside data set  ',calculator.dataset.firstvalue)
      console.log(' inside displayed  ',displayedNum)
      calculator.dataset.operator = action

    }

    console.log(' outside data set  ',calculator.dataset.firstvalue)
      console.log('outside  displayed  ',displayedNum) 

  

    const previousKeyType = calculator.dataset.previousKeyType

    // displaying second number in the display
    if (!action) {
      // if previous key value is operator then replace the displayed value with clicked value
      if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent
      } 
      else {
        display.textContent = displayedNum + keyContent
      }
    }

    
    Array.from(key.parentNode.children)
    .forEach(k => k.classList.remove('is-depressed'))

    // IF = button is pressed
    if (action === 'calculate') {
      console.log(' insde action data set  ',calculator.dataset.firstvalue)

      const operator = calculator.dataset.operator
      const secondValue = displayedNum
      
      display.textContent = calculate(calculator.dataset.firstvalue, operator, secondValue)
    }
    

    
  }


})



const calculate = (n1, operator, n2) => {

  let result = ''

  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }

  return result
}