const main = document.querySelector('main')
const root = document.querySelector(':root')
const screenResult = document.getElementById('screenResult')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.button').forEach(charKeyButton => {
    charKeyButton.addEventListener('click', function () {
        const value = charKeyButton.dataset.value
        screenResult.value += value
    })
})

document.getElementById('clear').addEventListener('click', function () {
    screenResult.value = ''
    screenResult.focus()
})

screenResult.addEventListener('keydown', evnts => {
    evnts.preventDefault()
    if (allowedKeys.includes(evnts.key)) {
        screenResult.value += evnts.key
        return
    }
    if (evnts.key === 'Backspace') {
        screenResult.value = screenResult.value.slice(0, -1)
    }
    if (evnts.key === 'Enter') {
        calculate()
    }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
    const result = eval(screenResult.value) //CUIDADO AO USAR eval POIS PODE EXISTIR BRECHAS COM O SISTEMA, na calculadora é de boa :D
    screenResult.value = result
}

document.getElementById