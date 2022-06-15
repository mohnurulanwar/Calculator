const calculatorScreen = document.querySelector('.calculator-screen')
const numbers = document.querySelectorAll(".number")

const updateScreen = (number) => {
    calculatorScreen.value = number 
}

numbers.forEach((number)=>{ 
    number.addEventListener('click', (event) => {
        updateScreen(event.target.value) 
    })
})

let prevNumber=''
let currentNumber='0'
let calculationOperator=''

const inputNumber = ((number) => {
    if (currentNumber === '0') {
        currentNumber = number
    }
    else{
        currentNumber += number
    }
})

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const inputOperator = ((operator)=>{
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
})

const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value)
    })
})

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', (event) => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break;
        case '%':
            result = 100 / parseFloat(currentNumber) * parseFloat(prevNumber) + '%'
        break;
        
        default:
            return
    }
    
    currentNumber = result
    calculationOperator = ''
}

const clearBtn = document.querySelector(".all-clear")
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += '.'
}

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})