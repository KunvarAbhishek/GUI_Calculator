import { display, button, string, allButton } from './calculator.js'

const newOperation = document.createElement('li')
newOperation.textContent= string 

const operations= document.querySelector('#operation')
operations.append(newOperation)